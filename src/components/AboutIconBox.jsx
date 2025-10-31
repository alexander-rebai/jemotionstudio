const AboutIconBox = ({ title, content, icon }) => {
  return (
    <div className="flex gap-6 lg:gap-9">
      <div className="">{icon}</div>
      <div>
        <h6 className="mb-4 pt-2.5 lg:pt-4">
          <span className="max-md:text-[18px]">{title}</span>
        </h6>
        <p className="neue-montreal-text text-xs md:text-sm leading-[20px] text-textLight max-w-[363px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AboutIconBox;
