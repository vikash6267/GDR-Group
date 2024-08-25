import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const SubNavbar = () => {
  const currentDate = new Date();

  // Array of weekday names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day of the week, month, day of the month, and year
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Function to get the ordinal suffix (st, nd, rd, th)
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Special case for 11th, 12th, 13th, etc.
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;

  const formattedDate = `${dayOfWeek}, ${month} ${dayWithSuffix}, ${year}`;
  return (
    <div className="sub-navbar-container border-b-2 border-black">
      <div className="main max-w-7xl mx-auto lg:flex lg:justify-between hidden p-5 border-b border-gray-400">
        <div className="first text-black text-xl  border-gray-400 pr-2">
          {formattedDate}
        </div>
        <div className="second flex gap-4  border-gray-400 pl-2">
          <div className="icon-container ">
            <FaFacebook size={22} />
          </div>
          <div className="icon-container">
            <FaInstagram size={22} />
          </div>
          <div className="icon-container">
            <FaYoutube size={22} />
          </div>
          <div className="icon-container">
            <FaLinkedin size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
