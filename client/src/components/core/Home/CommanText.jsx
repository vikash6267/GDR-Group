import React from "react";
import images from "../../../assests/banner.png";

const ScrollingText = () => {
  return (
    <div className="relative h-32 w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={images}
          alt="background"
        />
        {/* Darker Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>

      {/* Scrolling Texts */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center">
        <div className="overflow-hidden w-full h-16">
          <div className="text-right font-bold lg:text-xl text-xl text-white whitespace-nowrap welcomeanimate-scroll-right uppercase hover:pause-scroll">
            If you want to join us and invest, then you are welcome to GDR Group
          </div>
        </div>
        <div className="overflow-hidden w-full h-16 mt-2">
          <div className="text-left font-bold lg:text-xl text-xl text-white whitespace-nowrap welcomeanimate-scroll-left uppercase hover:pause-scroll">
            Your investment in the GDR Group is highly valued and appreciated.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
