import React, { useEffect, useState } from "react";
import images from "../../../assests/banner.png";
import { TypeAnimation } from "react-type-animation";
import video from "../../../assests/homevideo.mp4"
const ScrollingText = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setIsTypingDone(true);
    };

    document
      .querySelector(".type-animation")
      .addEventListener("animationend", handleAnimationEnd);

    return () => {
      document.querySelector(".type-animation");
      // .removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

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
        {/* <div className="overflow-hidden w-full h-16">
          <div className="scrolling-text-right hover:pause-scroll">
            If you want to join us and invest, then you are welcome to GDR Group
          </div>
        </div>
        <div className="overflow-hidden w-full h-16 mt-2">
          <div className="scrolling-text-left hover:pause-scroll">
            Your investment in the GDR Group is highly valued and appreciated.
          </div>
        </div> */}

        <div className="w-11/12 mx-auto uppercase">
          <TypeAnimation
            sequence={[
              "Welcome To GDR Group",
              1000,
              "If you want to join & Invest with us you are welcome to GDR group",
              1000,
            ]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              transition: "font-size 0.5s ease", // Smooth transition
              fontSize: isTypingDone ? "1rem" : "2rem", // Conditional font size
            }}
            omitDeletionAnimation={false}
            className="type-animation lg:text-3xl text-xl font-bold text-white"
            onTypingDone={() => setIsTypingDone(true)} // Set typing done when text animation completes
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
