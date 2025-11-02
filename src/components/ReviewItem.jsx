import React from "react";

const ReviewItem = ({ name, text, date, image, rating = 5 }) => {
  const starCount = Math.round(rating) || 5;

  return (
    <div className="lg:pl-9 lg:pr-12 lg:border-l border-l-lineLight h-full lg:max-w-[350px] xl:max-w-[450px] w-full max-lg:mt-9">
      <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-8">
        <img
          src={image}
          alt={name}
          className="md:w-10 md:h-10 w-6 h-6 rounded-full object-cover"
          onError={(e) => {
            e.target.src = "/images/logos/google-small.png";
          }}
        />
        <h6>{name}</h6>
      </div>
      <p className="neue-montreal-text text-[14px] leading-[20px] text-textLightWhite mb-6 md:mb-8">
        {text}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img
            src="/images/logos/google-small.png"
            alt=""
            className="w-4 h-4"
          />
          <span className="neue-montreal-text text-[10px] text-textLightWhite">
            {date}
          </span>
        </div>
        <div className="flex gap-[3.33px]">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
            >
              <path
                d="M2.98853 10.5745C2.42111 10.9168 1.72108 10.4089 1.87042 9.76326L2.45259 7.2465C2.5152 6.97585 2.42308 6.69276 2.21318 6.51079L0.259754 4.81722C-0.240893 4.38317 0.0260686 3.56065 0.68619 3.50335L3.27093 3.27898C3.54781 3.25494 3.7887 3.07976 3.8969 2.82376L4.89685 0.457803C5.15496 -0.152897 6.02041 -0.152897 6.27852 0.457803L7.27847 2.82376C7.38667 3.07976 7.62756 3.25494 7.90445 3.27898L10.4892 3.50335C11.1493 3.56065 11.4163 4.38317 10.9156 4.81722L8.96219 6.51079C8.7523 6.69276 8.66018 6.97585 8.72278 7.2465L9.30495 9.76326C9.45429 10.4089 8.75427 10.9168 8.18685 10.5745L5.97509 9.24027C5.73682 9.09654 5.43856 9.09654 5.20029 9.24027L2.98853 10.5745Z"
                fill={i < starCount ? "#F5CA0F" : "rgba(245, 202, 15, 0.2)"}
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
