"use client";

interface ActionButtonProps {
    text: string;
    onClick: () => void;
  }
  
  const ActionButton = ({ text, onClick }: ActionButtonProps) => (
    <button
      onClick={onClick}
      className="w-full my-[0.625rem] py-2 px-4 bg-[#FFCE22] hover:bg-[#FFD84D] text-[0.875rem] leading-[1.1375rem] font-normal text-[#1F2128] rounded-[0.25rem] transition-colors duration-200"
    >
      {text}
    </button>
  );
  
  export default ActionButton;
  