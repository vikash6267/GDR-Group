import React, { useState } from "react";
import home1 from "../../../assests/home/h1.jpg";
import home2 from "../../../assests/home/h2.jpg";
import home3 from "../../../assests/home/h3.jpg";
import home4 from "../../../assests/home/h4.jpg";
import c5 from "../../../assests/constructor/c5.jpg";
import c6 from "../../../assests/constructor/c6.jpg";
import c7 from "../../../assests/constructor/c7.jpg";
import c8 from "../../../assests/constructor/c8.jpg";
import { Link } from "react-router-dom";
const Project = () => {
  const tabs = [
    { id: 1, name: "RK Constructor" },
    { id: 2, name: "RKS Homes" },
    { id: 3, name: "SRS Food" },
    { id: 4, name: "Ri Si Home Food" },
    { id: 5, name: "72 GDR Steel" },
  ];

  const projects = {
    1: [
      {
        id: 1,
        name: "Infrastructure projects",
        src: c5,
        link: "/construction/home",
      },
      {
        id: 2,
        name: "Commercial buildings",
        src: c6,
        link: "/construction/home",
      },
      {
        id: 3,
        name: "Government facilities",
        src: c7,
        link: "/construction/home",
      },
      { id: 4, name: "Industrial sites", src: c8, link: "construction-home" },
      { id: 5, name: "Industrial sites", 
        src: "https://img.freepik.com/free-photo/construction-works-frankfurt-downtown-germany_1268-20907.jpg",
         link: "construction-home" },
      { id: 6, name: "Industrial sites", 
        src: "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
         link: "construction-home" },
      { id: 7, name: "Industrial sites", 
        src: "https://static.vecteezy.com/system/resources/previews/025/500/683/non_2x/double-exposure-of-modern-building-under-construction-with-crane-and-sky-background-building-construction-engineering-project-ai-generated-free-photo.jpg",
         link: "construction-home" },
      { id: 8, name: "Industrial sites", 
        src: "https://static.vecteezy.com/system/resources/thumbnails/015/640/043/original/4k-swimming-pool-construction-site-fading-vertically-to-completion-video.jpg",
        link: "/construction/home",
      },
    ],
    2: [
      { id: 4, name: "Commercial 1", src: home1 },
      { id: 5, name: "Commercial 2", src: home2 },
      { id: 6, name: "Commercial 3", src: home3 },
      { id: 7, name: "Commercial 4", src: home4 }, 
      { id: 12, name: "Commercial 4", src: "https://png.pngtree.com/png-vector/20200831/ourmid/pngtree-home-for-sale-sign-representing-the-concept-of-real-estate-sale-png-image_2336006.jpg" }, 
      { id: 22, name: "Commercial 4", src: "https://i.pinimg.com/736x/06/3f/b6/063fb643d1ddc8bbd4a3cdf002552aa4.jpg" }, 
      { id: 23, name: "Commercial 4", src: "https://img.freepik.com/premium-psd/real-estate-house-property-instagram-post-social-media-banner-template_486734-232.jpg" }, 
      { id: 24, name: "Commercial 4", src: "https://i.pinimg.com/736x/c5/6c/20/c56c20a7d00d37d3fdf3d833b580a85c.jpg" }, 
    ],
    
    3: [
      { id: 8, name: "Hospitality 1", src: "logo" },
      { id: 9, name: "Hospitality 2", src: "logo" },
    ],
    
    4: [
      { id: 10, name: "Office 1", src: "logo" },
      { id: 11, name: "Office 2", src: "logo" },
    ],
    5: [
      { id: 12, name: "Residential 1", src: "logo" },
      { id: 13, name: "Residential 2", src: "logo" },
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
      }, 300); // Match duration with CSS transition
    }
  };

  return (
    <div className="mt-10">
      <div className="bg-[#18191b] py-10">
        {/* Tabs */}
        <div>
          <div className="flex flex-wrap space-x-4 border-b justify-center border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-3 px-6 text-sm font-medium ${
                  activeTab === tab.id
                    ? "bg-yellow-600 text-white"
                    : "text-white hover:text-yellow-400"
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="py-5">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {projects[activeTab]?.map((project) => (
              <Link
                to={project.link}
                key={project.id}
                className="relative overflow-hidden group"
              >
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-80 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-lg">{project.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Project;
