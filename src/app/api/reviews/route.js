import { NextResponse } from "next/server";

// In-memory cache (for production, consider using Redis or database)
let cache = {
  data: null,
  timestamp: null,
};

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const placeId = process.env.PLACE_ID;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Google Maps API key not configured" },
        { status: 500 }
      );
    }

    if (!placeId) {
      return NextResponse.json(
        { error: "Place ID not configured" },
        { status: 500 }
      );
    }

    // Check cache
    const now = Date.now();
    if (cache.data && cache.timestamp && now - cache.timestamp < CACHE_DURATION) {
      return NextResponse.json(cache.data, {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
        },
      });
    }

    // Fetch from Google Places API (New API)
    const url = `https://places.googleapis.com/v1/places/${placeId}?language=nl`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,reviews",
      },
    });

    if (!response.ok) {
      // Fallback to legacy API if new API fails
      return await fetchLegacyAPI(apiKey, placeId);
    }

    const data = await response.json();

    // Transform and filter reviews
    const reviews = (data.reviews || [])
      .filter((review) => review.rating >= 4)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10)
      .map((review) => ({
        name: review.authorAttribution?.displayName || "Anonymous",
        text: review.text?.text || "",
        date: formatDate(review.publishTime || review.relativePublishTime),
        image: review.authorAttribution?.photoUri || "/images/logos/google-small.png",
        rating: review.rating || 5,
      }));

    const result = {
      reviews,
      averageRating: data.rating || 0,
      totalReviews: data.userRatingCount || 0,
    };

    // Update cache
    cache.data = result;
    cache.timestamp = now;

    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews", details: error.message },
      { status: 500 }
    );
  }
}

// Fallback to legacy Places API
async function fetchLegacyAPI(apiKey, placeId) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}&language=nl`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Google API returned ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "OK" || !data.result) {
      throw new Error(data.error_message || "Invalid response from Google API");
    }

    // Transform legacy API response
    const reviews = (data.result.reviews || [])
      .filter((review) => review.rating >= 4)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10)
      .map((review) => ({
        name: review.author_name || "Anonymous",
        text: review.text || "",
        date: formatLegacyDate(review.time),
        image: review.profile_photo_url || "/images/logos/google-small.png",
        rating: review.rating || 5,
      }));

    const result = {
      reviews,
      averageRating: data.result.rating || 0,
      totalReviews: data.result.user_ratings_total || 0,
    };

    // Update cache
    cache.data = result;
    cache.timestamp = Date.now();

    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching from legacy API:", error);
    throw error;
  }
}

function formatDate(timestamp) {
  if (!timestamp) return "";
  
  try {
    let date;
    
    // Handle RFC 3339 strings (new API) or Unix timestamps (legacy API)
    if (typeof timestamp === 'string') {
      date = new Date(timestamp);
    } else if (typeof timestamp === 'number') {
      // If less than 13 digits, assume Unix timestamp in seconds
      date = timestamp < 10000000000 
        ? new Date(timestamp * 1000) 
        : new Date(timestamp);
    } else {
      return "";
    }
    
    if (isNaN(date.getTime())) {
      return "";
    }
    
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  } catch (e) {
    return "";
  }
}

function formatLegacyDate(timestamp) {
  if (!timestamp) return "";
  // Legacy API provides Unix timestamp in seconds
  return formatDate(timestamp);
}

