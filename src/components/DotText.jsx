const DotText = ({ text, margin = "mb-6 md:mb-[36px]" }) => {
  return (
    <div className={`flex items-center gap-2 ${margin}`}>
      <div className="dot"></div>
      <span className="neue-montreal-text text-[10px] md:text-xs uppercase">
        {text}
      </span>
    </div>
  );
};

export default DotText;
