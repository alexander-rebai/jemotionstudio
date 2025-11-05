"use client";

import { useEffect, useState, useRef } from "react";

const IntroVideo = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if intro video has already been shown
    const hasShown = document.documentElement.getAttribute("data-intro-shown");

    if (hasShown === "true") {
      // Video already shown, don't play it
      if (onComplete) onComplete();
      return;
    }

    // Prevent body scroll while video is playing
    document.body.style.overflow = "hidden";

    // Ensure video plays (fallback for browsers that block autoplay)
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video autoplay was prevented:", error);
          // Autoplay was prevented, but video is muted so this shouldn't happen
          // If it does, try playing again on any user interaction
          const tryPlay = () => {
            videoRef.current?.play();
            document.removeEventListener("click", tryPlay);
            document.removeEventListener("touchstart", tryPlay);
          };
          document.addEventListener("click", tryPlay);
          document.addEventListener("touchstart", tryPlay);
        });
      }
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  const handleVideoEnd = () => {
    // Mark intro video as shown for this session
    sessionStorage.setItem("introVideoShown", "true");

    // Update the data attribute so CSS hides it on next load
    document.documentElement.setAttribute("data-intro-shown", "true");

    // Trigger curtain animation
    setIsAnimating(true);

    // Wait for curtain animation to complete before hiding
    setTimeout(() => {
      document.body.style.overflow = "unset";
      if (onComplete) onComplete();
    }, 1000); // 1s for curtain animation
  };

  return (
    <div
      className={`intro-video fixed inset-0 z-[100] bg-[#1B1B1B] flex items-center justify-center transition-transform duration-1000 ease-in-out ${
        isAnimating ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        onEnded={handleVideoEnd}
        className="md:max-w-[30%] md:max-h-[30%] w-auto h-auto object-contain"
      >
        <source src="/final.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IntroVideo;

