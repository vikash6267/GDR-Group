import React, { useState } from "react";
import "./TagCloud.css";
import globeimage from "../../../assests/globe.png";
import image1 from "../../../assests/logos/rfood.jpg";
import image2 from "../../../assests/logos/gdrgruop.jpg";
import image3 from "../../../assests/logos/rhome.jpg";
import image4 from "../../../assests/nir.jpg";

const TagCloudWithDetails = () => {
  // Define tags with associated details and images
  const tags = [
    {
      name: "New RK Construction",
      details:
        "Specializing in all types of construction services including residential, commercial, and industrial projects.",
      image: image2,
    },
    {
      name: "RKS Homes",
      details:
        "Offering comprehensive home building and renovation services with a focus on quality and customer satisfaction.",
      image: image3,
    },
    {
      name: "Nirvdit All Making Products Private Limited",
      details:
        "Providing a range of high-quality food products, including spices, grains, and ready-to-eat meals.",
      image: image4,
    },

    {
      name: "SRS Home Food",
      details:
        "Supplying a variety of liquid products, including industrial chemicals and personal care items.",
      image: image1,
    },
  ];

  // State to manage the selected tag
  const [selectedTag, setSelectedTag] = useState(tags[0]);

  return (
    <div className="containercanvas grid lg:grid-cols-2 min-h-[80vh] grid-cols-1">
      {/* Details box */}
      <div className="details-box font-bold lg:text-lg p-4  text-wrap text-white min-h-[400px]">
        {selectedTag ? (
          <div className="details-content flex justify-center flex-col items-center">
            <img
              src={selectedTag.image}
              alt="Tag Details"
              className="details-image max-h-[200px] min-h-[200px]"
            />
            <p>{selectedTag.details}</p>
          </div>
        ) : (
          <div className="details-placeholder">
            Hover over a tag to see details
          </div>
        )}
      </div>

      {/* Tag cloud */}
      <div className="tags relative flex justify-center items-center min-h-[400px] ">
        <img
          src={globeimage}
          alt="Globe"
          className="absolute lg:h-[400px] h-[300px] overflow-hidden "
        />
        <ul className="">
          {tags.map((tag, index) => (
            <li
              key={index}
              onMouseEnter={() => setSelectedTag(tag)}
              className={`floating-tag floating-tag-${
                index + 1
              } font-bold text-white text-xl`}
            >
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagCloudWithDetails;
