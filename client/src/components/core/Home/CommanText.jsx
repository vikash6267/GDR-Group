import React, { useEffect, useState } from "react";

import video from "../../../assests/homevideo.mp4"
const ScrollingText = () => {

  return (
    <div className="relative  w-full overflow-hidden bg-black">
    
      <div className="">
      
        <video src={video} autoPlay muted></video>
      </div>
    </div>
  );
};

export default ScrollingText;
