"use client";

const ApplicationLogo = ({ width = "146px", height="24px" }) => {
  return (
    <a href="/" className="flex items-center justify-center">
      <img src="/logo.png" alt="Renovise." style={{ width, height }} />
    </a>
  );
};

export default ApplicationLogo;
