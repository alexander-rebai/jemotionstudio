"use client";

import Image from "next/image";

const ApplicationLogo = ({ height = "40px" }) => {
  // Convert height string to number for Next.js Image
  const heightNum = parseInt(height, 10);
  // Maintain aspect ratio (logo is roughly 1:1 aspect)
  const widthNum = heightNum;

  return (
    <a href="/" className="flex items-center justify-center md:justify-start">
      <Image
        src="/logo.jpeg"
        alt="JE Motion Studio"
        width={widthNum}
        height={heightNum}
        style={{ height: height, width: "auto" }}
        priority
      />
    </a>
  );
};

export default ApplicationLogo;
