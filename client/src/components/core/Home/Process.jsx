import React, { useState } from "react";
import {
  FaHandshake,
  FaLightbulb,
  FaPaintBrush,
  FaHammer,
} from "react-icons/fa";

const Process = () => {
  const [activeStep, setActiveStep] = useState(1); // Example: Set active step to 'IDEA & CONCEPT'

  const steps = [
    {
      name: "MEET & AGREE",
      icon: <FaHandshake />,
      description:
        "This is where we meet and discuss your requirements, goals, and vision.",
    },
    {
      name: "IDEA & CONCEPT",
      icon: <FaLightbulb />,
      description:
        "Here we brainstorm ideas and develop a concept that aligns with your vision.",
    },
    {
      name: "DESIGN & CREATE",
      icon: <FaPaintBrush />,
      description:
        "We move forward with the design and start creating the project.",
    },
    {
      name: "BUILD & INSTALL",
      icon: <FaHammer />,
      description:
        "Finally, we build and install the final product to your satisfaction.",
    },
  ];

  return (
    <div className="my-10">
      <div
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 container mx-auto py-16 text-center">
          <h2 className="text-4xl font-semibold mb-8">OUR PROCESS</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div
                  className={`${
                    index === activeStep
                      ? "bg-transparent border-2 border-white"
                      : "bg-yellow-500 text-black"
                  } font-bold rounded-full w-32 h-32 flex items-center justify-center text-lg cursor-pointer transition-all duration-300 ease-in-out`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.name}
                </div>
                {/* Connecting Line */}
                {index === activeStep && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[2px] h-14 bg-white"></div>
                )}
              </div>
            ))}
          </div>
          <hr className="border-white my-14" />
          <div className="mt-8 text-sm max-w-7xl mx-auto p-5 transition-opacity duration-300 ease-in-out">
            <p
              key={activeStep}
              className="transition-opacity duration-300 ease-in-out opacity-100"
            >
              {steps[activeStep].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
