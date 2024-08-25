import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg max-w-lg w-full">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
        <div className="text-center">
          <video
            src="your-video-url.mp4"
            controls
            autoPlay
            className="rounded-md w-full"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Modal;
