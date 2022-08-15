import React from "react";
const style = {
  violet: {
    background:
      "linear-gradient(148.37deg, rgba(113, 102, 249, 0.084) 8.01%, rgba(113, 102, 249, 0.3) 93.37%)",
  },
  blue: {
    background:
      "linear-gradient(148.37deg, rgba(113, 102, 249, 0.084) 8.01%, rgba(113, 102, 249, 0.3) 93.37%)",
  },
  orange: {
    background:
      "linear-gradient(218.07deg, rgba(253, 122, 85, 0.2) 16.55%, rgba(253, 122, 85, 0) 87.99%)",
  },
};

export default function Roundblur100({ children, color }) {
  return (
    <div
      style={style[color]}
      className={`w-[100px] h-[100px] rounded-[20px] backdrop-blur-[4px] flex items-center justify-center z-50`}
    >
      {children}
    </div>
  );
}
