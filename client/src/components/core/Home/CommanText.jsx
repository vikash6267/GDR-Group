import React from "react";
import video from "../../../assests/video.mp4";

const ScrollingText = () => {
  return (
    <div className="relative h-96 w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scrolling Texts */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center">
        <div className="scroll-left overflow-hidden w-full h-44">
          <div className="text-left font-extrabold lg:text-4xl text-2xl whitespace-nowrap gradient-text animate-scroll-left">
            If you want to join us and invest then you are welcome to GDR Group
          </div>
        </div>
        <div className="scroll-right overflow-hidden w-full h-44 mt-4">
          <div className="text-right font-extrabold gradient-text lg:text-4xl text-2xl whitespace-nowrap animate-scroll-right">
            If you want to join us and invest then you are welcome to GDR Group
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
