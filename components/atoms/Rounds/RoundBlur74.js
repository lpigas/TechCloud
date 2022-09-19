import React from "react";
const stylesBig = {
  blue: {
    background:
      "linear-gradient(138.81deg, rgba(109, 191, 255, 0.5) 5.83%, rgba(109, 191, 255, 0) 100%)",
  },
  violet: {
    background:
      "linear-gradient(148.37deg, rgba(113, 102, 249, 0.084) 8.01%, rgba(113, 102, 249, 0.3) 93.37%)",
  },
  orange: {
    background:
      "linear-gradient(218.07deg, rgba(253, 122, 85, 0.2) 16.55%, rgba(253, 122, 85, 0) 87.99%)",
  },
};
const stylesMini = {
  blue: {
    background:
      "linear-gradient(137.1deg, #6DBFFF 17.58%, rgba(109, 191, 255, 0.45) 79.68%)",
  },
  violet: {
    background:
      "linear-gradient(180deg, #7166F9 0%, rgba(113, 102, 249, 0.45) 100%)",
  },
  orange: {
    background:
      "linear-gradient(180deg, #FD7A55 0%, rgba(253, 122, 85, 0.45) 100%)",
  },
};

export default function Roundblur74({ color, children }) {
  return (
    <div
      style={stylesBig[color]}
      className={`w-[74px] h-[73px] rounded-[20px] backdrop-blur-[4px] flex items-center justify-center z-50`}
    >
      <div
        style={stylesMini[color]}
        className={`w-[37px] h-[37px] rounded-[15px] z-50 flex items-center justify-center`}
      >
        {children}
      </div>
    </div>
  );
}
