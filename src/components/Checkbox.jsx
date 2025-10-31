const Checkbox = ({ text }) => {
  return (
    <label className="flex gap-1.5 items-center group">
      <input type="checkbox" hidden className="peer" />
      <div className="w-[15px] h-[15px] bg-transparent rounded-[2px] border-[1.5px] border-[#a5a5a5a] cursor-pointer peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center">
        <svg
          className="group-has-[:checked]:opacity-100 opacity-0"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.5L4.5 8L10 1"
            stroke="#1f1f1f"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-textLight">{text}</p>
    </label>
  );
};

export default Checkbox;
