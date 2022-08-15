import React from "react";
const style = {
  violet: {
    background:
      "linear-gradient(148.37deg, rgba(113, 102, 249, 0.028) 8.01%, rgba(113, 102, 249, 0.1) 93.37%)",
  },
  blue: {
    background:
      "linear-gradient(138.81deg, rgba(109, 191, 255, 0.1) 5.83%, rgba(109, 191, 255, 0) 100%)",
  },
  orange: {
    background:
      "linear-gradient(218.07deg, rgba(253, 122, 85, 0.1) 16.55%, rgba(253, 122, 85, 0) 87.99%)",
  },
};

export default function Roundblur120({ children, color }) {
  return (
    <div
      style={style[color]}
      className={`w-[120px] h-[120px] rounded-[20px] backdrop-blur-[4px] flex items-center justify-center z-50`}
    >
      {children}
    </div>
  );
}
