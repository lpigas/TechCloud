import React from "react";

const styles = {
  Static:
    "w-[276px] h-[70px] rounded-[10px] bg-[#FD7A55] flex items-center justify-center drop-shadow-[0_15px_25px_rgba(255,179,157)]",
};

export default function Static({ children, onClick, type }) {
  return (
    <button
      className={`leading-[28px] text-[16px] text-[#FFFFFF] font-medium ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
