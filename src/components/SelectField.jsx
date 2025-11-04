import { useState, useEffect } from "react";

const SelectField = ({
  placeholder,
  options,
  id,
  name,
  value: propValue = "",
  onChange = () => {},
}) => {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const selectValue = (option) => {
    setValue(option);
    onChange({ target: { name, value: option } });
  };

  return (
    <div className="relative w-full group">
      <input
        type="text"
        placeholder={placeholder}
        readOnly
        className="select-field w-full cursor-pointer"
        value={value}
        id={id ? id : name}
        name={name}
      />

      <div
        className={`bg-bgBlack-200 flex flex-col w-full absolute top-full left-0 z-40
              group-has-[:focus]:max-h-[250px] max-h-0 
              overflow-y-auto group-has-[:focus]:overflow-y-auto
              transition-all duration-200 border-x 
              group-has-[:focus]:border-b border-line`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="px-8 py-2 cursor-pointer option hover:bg-bgBlack-100"
            onClick={() => selectValue(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <div
        className={`absolute right-0 top-1.5 group-has-[:focus]:rotate-180 transition-all duration-200`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
        >
          <path
            d="M0.412746 4.00546C0.398795 4.01758 0.292117 4.38889 0.17577 4.83053C0.0594234 5.27222 -0.0179896 5.63838 0.00361859 5.64427C0.0252916 5.6501 0.376668 5.6958 0.784497 5.74577C1.60347 5.84616 2.55968 6.08921 3.1577 6.34893C5.02145 7.15846 6.25551 8.6109 6.57626 10.3725L6.65796 10.8211L7.48127 10.8211L8.30465 10.8211L8.38284 10.4145C8.89508 7.75073 11.178 6.01407 14.5944 5.68919C14.8175 5.66799 15 5.64264 15 5.63288C15 5.54304 14.5888 4.05442 14.5562 4.02627C14.5327 4.00591 14.3235 4.02105 14.0916 4.05997C11.5228 4.49073 9.4325 5.72412 8.5585 7.32468L8.34884 7.70861L7.5 9.32031L6.62882 7.70284L6.34733 7.21813C5.61713 5.96067 4.18476 4.96512 2.26216 4.37885C1.71443 4.21178 0.465696 3.9597 0.412746 4.00546Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectField;
