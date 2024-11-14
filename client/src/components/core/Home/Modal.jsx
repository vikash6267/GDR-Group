import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-lg max-w-md md:max-w-2xl w-full mx-4 p-8 md:p-12 shadow-2xl transform transition-all duration-300 scale-105">
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-red-600 transition-colors duration-300"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Text Content */}
        <div className="text-center text-gray-800 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Welcome to GDR Group 72
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            GDR Group 72 is a dynamic conglomerate engaged in diverse sectors,
            including Agriculture, Dairy, Farm Land, and Commercial Property.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Our mission is to cultivate opportunities that foster growth and
            development in rural communities, driving innovation and excellence
            across our ventures.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            With a deep commitment to sustainability and progress, we aim to
            empower the future through our strategic initiatives and dedicated
            efforts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
