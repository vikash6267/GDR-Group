import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { FaCalendarAlt } from "react-icons/fa";
import h1 from "../../../assests/home/blog/h1.jpg";
import h2 from "../../../assests/home/blog/h2.jpg";
import h3 from "../../../assests/home/blog/h3.jpg";
import h4 from "../../../assests/home/blog/h4.jpg";
import h5 from "../../../assests/home/blog/h5.jpg";
import h6 from "../../../assests/home/blog/h6.jpg";
import h7 from "../../../assests/home/blog/h7.jpg";
import h8 from "../../../assests/home/blog/h8.jpg";

const work = [
  {
    id: 1,
    image: h1,
    text: "Creating a Photography Website? Development Costs and Options Available",
    date: "January 5, 2023",
  },
  {
    id: 2,
    image: h2,
    text: "Best Website Builder for Small Businesses in 2024",
    date: "February 12, 2023",
  },
  {
    id: 3,
    image: h3,
    text: "Best Time to Post on Social Media Channels for Better Growth",
    date: "March 8, 2023",
  },
  {
    id: 4,
    image: h4,
    text: "Website Redesigning Cost India: How Much Does it Cost?",
    date: "April 15, 2023",
  },
  {
    id: 5,
    image: h5,
    text: "Digital Marketing Packages: How Much Does Digital Marketing Cost in India?",
    date: "May 20, 2023",
  },
  {
    id: 6,
    image: h6,
    text: "Website Pricing: How Much Does Website Development Cost in India?",
    date: "June 25, 2023",
  },
  {
    id: 7,
    image: h7,
    text: "How To Change Facebook Page Name in 2024?",
    date: "July 5, 2023",
  },
  {
    id: 8,
    image: h8,
    text: "Types of Websites: What Are The Different Types of Websites in 2024?",
    date: "August 10, 2023",
  },
];

const Blog = () => {
  return (
    <div className="relative mt-2 max-w-7xl mx-auto px-5">
      <p className="text-center text-4xl font-semibold my-10">Latest Blog</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {work.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt="Service"
                className="w-full  object-cover"
              />
              <div className="p-4 flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-2 p-5">{item.text}</h3>
                <div className="flex items-center text-gray-500 px-5">
                  <FaCalendarAlt className="mr-2" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Blog;
