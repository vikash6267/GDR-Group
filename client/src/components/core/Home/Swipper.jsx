import React, { useState, useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import image1 from "../../../assests/const.jpg";
import image2 from "../../../assests/milk.jpg";
import image3 from "../../../assests/real.jpg";

const Slider = ({ name }) => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const work = [
    { id: 1, image: "https://i.pinimg.com/originals/94/41/f2/9441f2efd20b16f02e73b25b43181a8c.jpg", text: "New RK Construction" },
    { id: 2, image: "https://wallpapers.com/images/hd/real-estate-digital-art-0kmi22tcj2x60lim.jpg", text: "RKS Homes " },
    { id: 3, image: image2, text: "RKS Food" },
  ];

  return (
    <div className="relative ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Slower slide transition
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {work.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <img
              src={item.image}
              alt="Service"
              className="w-full lg:h-[80vh] object-cover"
            />
            <div className={`absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6 transition-opacity duration-1000 ${textVisible ? "opacity-100" : "opacity-0"}`}>
              <p className="text-white text-2xl md:text-4xl font-bold text-center mb-4 px-4">{item.text}</p>
              <a href="#" className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">Learn More</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
