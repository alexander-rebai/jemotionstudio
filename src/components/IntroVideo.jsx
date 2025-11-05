"use client";

import { useEffect, useState } from "react";

const IntroVideo = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Prevent body scroll during animation
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleVideoEnd = () => {
    // Trigger curtain animation
    setIsAnimating(true);
    
    // Wait for curtain animation to complete before hiding
    setTimeout(() => {
      setIsHidden(true);
      document.body.style.overflow = "unset";
      if (onComplete) onComplete();
    }, 1000); // 1s for curtain animation
  };

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#1B1B1B] flex items-center justify-center transition-transform duration-1000 ease-in-out ${
        isAnimating ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
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

