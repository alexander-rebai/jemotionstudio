const IconBox = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center max-w-[230px] text-center">
      <div className="mb-8 md:mb-12">{icon}</div>
      <h6 className="mb-4 md:mb-7">{title}</h6>
      <p className="neue-montreal-text text-xs md:text-[14px] leading-[20px] text-textLight">
        {text}
      </p>
    </div>
  );
};

export default IconBox;
