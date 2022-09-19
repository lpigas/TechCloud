import React from "react";
const style = {
  violet: {
    background:
      "linear-gradient(180deg, #7166F9 0%, rgba(113, 102, 249, 0.45) 100%)",
  },
  blue: {
    background:
      "linear-gradient(137.1deg, #6DBFFF 17.58%, rgba(109, 191, 255, 0.45) 79.68%)",
  },
  orange: {
    background:
      "linear-gradient(180deg, #FD7A55 0%, rgba(253, 122, 85, 0.45) 100%)",
  },
  lightblue: {
    background:
      "linear-gradient(180deg, #4CD7F6 0%, rgba(76, 215, 246, 0.41) 100%)",
  },
  pink: {
    background:
      "linear-gradient(137.1deg, #FF8EFF 17.58%, rgba(255, 142, 255, 0.44) 79.68%)",
  },
};

export default function RoundBlur50({ children, color }) {
  return (
    <div
      style={style[color]}
      className={`w-[50px] h-[50px] rounded-[15px] backdrop-blur-[4px] flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
