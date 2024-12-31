"use client";

interface PageCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const PageCheckbox = ({ label, checked, onChange }: PageCheckboxProps) => (
  <label className="flex items-center justify-between w-full py-[0.625rem] px-3 bg-white rounded-lg cursor-pointer transition-colors duration-200">
    <span className="text-[0.875rem] leading-[1.1375rem] font-normal text-[#1F2128]">
      {label}
    </span>
    <div className="relative w-[1.4375rem] h-[1.4375rem]">
      <input
        type="checkbox"
        aria-label={`Select ${label}`}
        checked={checked}
        onChange={onChange}
        className={`
          peer
          w-full h-full
          appearance-none
          rounded-[0.375rem]
          border-[0.0625rem]
          border-[#CDCDCD]
          cursor-pointer
          transition-colors
          duration-200
          hover:border-[#BDBDBD]
          hover:border-[0.1rem]
          checked:bg-[#2469F6]
          checked:hover:bg-[#5087F8]
          checked:hover:border-[#5087F8]
          checked:hover:border-[0.1rem]
          checked:border-[#2469F6]
          focus:outline-none
          focus:ring-4
          focus:ring-[#EAF0FE]
        `}
      />
      {/* Check Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E3E3E3"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          absolute 
          w-full h-full
          top-1/2 left-1/2
          transform -translate-x-1/2 -translate-y-1/2
          opacity-0
          peer-hover:opacity-100
          peer-checked:opacity-100
           peer-checked:stroke-white
          pointer-events-none
        `}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </label>
);

export default PageCheckbox;
