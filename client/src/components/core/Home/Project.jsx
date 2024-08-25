import React, { useState } from "react";
import logo from "../../../assests/logos/gdrgruop.jpg";

const Project = () => {
  const tabs = [
    { id: 1, name: "All Projects" },
    { id: 2, name: "Commercial" },
    { id: 3, name: "Hospitality" },
    { id: 4, name: "Office" },
    { id: 5, name: "Residential" },
  ];

  const projects = {
    1: [
      { id: 1, name: "Project 1", src: logo },
      { id: 2, name: "Project 2", src: logo },
      { id: 3, name: "Project 3", src: logo },
    ],
    2: [
      { id: 4, name: "Commercial 1", src: logo },
      { id: 5, name: "Commercial 2", src: logo },
    ],
    3: [
      { id: 6, name: "Hospitality 1", src: logo },
      { id: 7, name: "Hospitality 2", src: logo },
    ],
    4: [
      { id: 8, name: "Office 1", src: logo },
      { id: 9, name: "Office 2", src: logo },
    ],
    5: [
      { id: 10, name: "Residential 1", src: logo },
      { id: 11, name: "Residential 2", src: logo },
    ],
  };

  const [activeTab, setActiveTab] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabClick = (id) => {
    if (activeTab !== id) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(id);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="my-10">
      <div className="bg-gray-900">
        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap space-x-4 border-b justify-center border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`text-white py-3 px-6 text-sm font-medium ${
                  activeTab === tab.id
                    ? "border-b-2 bg-yellow-600 text-white"
                    : "hover:text-white"
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {projects[activeTab].map((project) => (
              <div key={project.id} className="relative overflow-hidden group">
                <div className="w-full h-48">
                  <img
                    src={project.src}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-lg">{project.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
