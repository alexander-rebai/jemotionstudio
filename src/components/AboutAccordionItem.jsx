const AboutAccordionItem = ({
  title,
  content,
  isActive = false,
  setActiveAccordion,
  isLast = false,
}) => {
  return (
    <div
      className={`py-[42px] lg:py-16 border-b ${
        isLast ? "border-b-transparent" : "border-b-line"
      } w-full cursor-pointer `}
      onClick={() => setActiveAccordion()}
    >
      <div className="w-full flex flex-col lg:flex-row justify-between relative">
        {/* title */}
        <div
          className={`${
            isActive ? "py-1 lg:py-4 pl-5 lg:pl-12 border-l-2" : "py-0"
          } border-l-primary transition-all duration-100 ease-in-out h-fit`}
        >
          <h3 className="max-w-[80%]">{title}</h3>
        </div>

        {/* content */}
        <div
          className={`lg:max-w-1/2 lg:pr-[10%] max-lg:pl-5 ${
            isActive ? "max-h-[250px]  max-lg:pt-[38px] lg:py-4" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <p className="neue-montreal-text text-[12px] md:text-[18px] leading-[150%] md:leading-[26px] text-textLight">
            {content}
          </p>
        </div>

        {/* icon  */}
        <div
          className={`absolute top-0 lg:top-4 right-0 ${
            isActive ? "rotate-180 max-lg:top-0" : "rotate-0"
          } transition-transform duration-200 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill="none"
            className="max-lg:w-[18px] max-lg:h-[18px]"
          >
            <path
              d="M23.3396 15.4986C23.3619 15.519 23.5326 16.1456 23.7188 16.8909C23.9049 17.6362 24.0288 18.2541 23.9942 18.264C23.9595 18.2739 23.3973 18.351 22.7448 18.4353C21.4345 18.6047 19.9045 19.0149 18.9477 19.4532C15.9657 20.8192 13.9912 23.2703 13.478 26.243L13.3473 27L12.03 27L10.7126 27L10.5874 26.3139C9.76787 21.8187 6.11517 18.8881 0.648893 18.3398C0.291949 18.3041 -7.98227e-07 18.2613 -7.97507e-07 18.2448C-7.9088e-07 18.0932 0.657922 15.5812 0.710042 15.5337C0.74773 15.4993 1.08235 15.5249 1.45352 15.5905C5.56356 16.3175 8.90801 18.3988 10.3064 21.0997L10.6419 21.7476L10.6681 8.42462L10.6848 -5.82026e-07L13.3508 -4.6549e-07L13.3675 8.44629L13.3939 21.7379L13.8443 20.9199C15.0126 18.798 17.3044 17.118 20.3805 16.1287C21.2569 15.8467 23.2549 15.4213 23.3396 15.4986Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutAccordionItem;
