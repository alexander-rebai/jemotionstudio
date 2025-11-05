"use client";

const ArrowButton = ({
  text,
  background = "#AED800",
  width = "auto",
  onclick = () => {},
  href = "",
}) => {
  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return href ? (
    <a href={href} onClick={handleClick}>
      <button
        style={{ background: background, width: width }}
        className="flex items-center justify-center gap-1.5 px-6 h-[51px] rounded-full text-black neue-montreal-text text-xs md:text-sm cursor-pointer hover:brightness-90"
      >
        <span
          className={`leading-normal ${
            background === "#AED800" ? "font-medium" : ""
          }`}
        >
          {text}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M12.3084 11.9775C12.322 11.9775 12.5829 11.8212 12.888 11.6302C13.1931 11.4391 13.4367 11.2713 13.4295 11.2574C13.4221 11.2435 13.2756 11.0456 13.1038 10.8177C12.7588 10.36 12.4267 9.7548 12.2795 9.31584C11.8209 7.94771 12.032 6.52703 12.8643 5.38028L13.0763 5.08826L12.6728 4.68476L12.2693 4.28124L12.0026 4.47131C10.2552 5.71661 8.16083 5.57333 6.30401 4.0815C6.18277 3.98407 6.0791 3.90889 6.07362 3.91437C6.02316 3.96483 5.38848 5.00256 5.38863 5.03434C5.38873 5.05732 5.49974 5.15131 5.63529 5.24313C7.13617 6.26007 8.85341 6.59164 10.1808 6.12089L10.4992 6.00797L6.07236 10.4509L3.2731 13.2604L4.08971 14.077L6.9064 11.2706L11.3389 6.85417L11.2046 7.2644C10.8561 8.3286 10.9989 9.58981 11.6118 10.8614C11.7864 11.2237 12.2567 11.9772 12.3084 11.9775Z"
            fill="black"
          />
        </svg>
      </button>
    </a>
  ) : (
    <button
      style={{ background: background, width: width }}
      className="flex items-center justify-center gap-1.5 px-6 h-[51px] rounded-full text-black neue-montreal-text text-xs md:text-sm cursor-pointer hover:brightness-90"
      onClick={onclick}
    >
      <span
        className={`leading-normal ${
          background === "#AED800" ? "font-medium" : ""
        }`}
      >
        {text}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          d="M12.3084 11.9775C12.322 11.9775 12.5829 11.8212 12.888 11.6302C13.1931 11.4391 13.4367 11.2713 13.4295 11.2574C13.4221 11.2435 13.2756 11.0456 13.1038 10.8177C12.7588 10.36 12.4267 9.7548 12.2795 9.31584C11.8209 7.94771 12.032 6.52703 12.8643 5.38028L13.0763 5.08826L12.6728 4.68476L12.2693 4.28124L12.0026 4.47131C10.2552 5.71661 8.16083 5.57333 6.30401 4.0815C6.18277 3.98407 6.0791 3.90889 6.07362 3.91437C6.02316 3.96483 5.38848 5.00256 5.38863 5.03434C5.38873 5.05732 5.49974 5.15131 5.63529 5.24313C7.13617 6.26007 8.85341 6.59164 10.1808 6.12089L10.4992 6.00797L6.07236 10.4509L3.2731 13.2604L4.08971 14.077L6.9064 11.2706L11.3389 6.85417L11.2046 7.2644C10.8561 8.3286 10.9989 9.58981 11.6118 10.8614C11.7864 11.2237 12.2567 11.9772 12.3084 11.9775Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
