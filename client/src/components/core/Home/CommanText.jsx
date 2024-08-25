import React from "react";

const CommanText = ({ text }) => {
  return (
    <div className="overflow-hidden w-full h-24 flex items-center">
      <div
        className="text-5xl md:text-8xl lg:text-9xl font-extrabold whitespace-nowrap animate-scroll"
        style={{
          fontFamily: '"Bungee Tint", sans-serif',
          whiteSpace: "nowrap",
          animation: "scroll 20s linear infinite",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default CommanText;
