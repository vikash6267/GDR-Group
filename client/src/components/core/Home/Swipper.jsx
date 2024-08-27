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
import { useSpring, animated } from "@react-spring/web";
import image2 from "../../../assests/milk.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  const [textVisible, setTextVisible] = useState(false);

  const work = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/originals/94/41/f2/9441f2efd20b16f02e73b25b43181a8c.jpg",
      text: "New RK Construction",
      description:
        "Top player in civil works with a focus on quality and safety.",
      path: "/construction-home",
    },
    {
      id: 2,
      image:
        "https://wallpapers.com/images/hd/real-estate-digital-art-0kmi22tcj2x60lim.jpg",
      text: "SRS Homes",
      description:
        "Expert in agricultural land sales with seamless financing options.",
      path: "/homes",
    },
    {
      id: 3,
      image: image2,
      text: "RKS Food",
      description:
        "High-quality dairy products with a focus on freshness and excellence.",
      path: "/food",
    },
    {
      id: 4,
      image:
        "https://c4.wallpaperflare.com/wallpaper/441/38/477/pepper-carnation-spices-diversity-wallpaper-preview.jpg",
      text: "Ri Si Home Food",
      description: "Wide range of spices and dry foods for home cooking.",
      path: "/ri-si-home-food-home",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/1344231216/photo/rolled-metal-warehouse-many-packs-of-metal-bars-on-the-shelves.jpg?s=612x612&w=0&k=20&c=NdBJpn98jT43UXxRMv-R1gVwynBq-2nQGmJVLx4bCxc=",
      text: "72 GDR Steel",
      description:
        "Specializes in high-quality TMT iron rods and other steel products.",
      path: "/steel",
    },
    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/1344231216/photo/rolled-metal-warehouse-many-packs-of-metal-bars-on-the-shelves.jpg?s=612x612&w=0&k=20&c=NdBJpn98jT43UXxRMv-R1gVwynBq-2nQGmJVLx4bCxc=",
      text: "R. R. S. Liquid Products",
      description:
        "Provides high-quality mineral water, ice cubes, and beverages.",
      path: "/liquid-products",
    },
    {
      id: 7,
      image:
        "https://t3.ftcdn.net/jpg/07/34/77/60/360_F_734776078_Z94kwR6jm2w1HxmPeSjqJNJFqM4Mp3Nk.jpg",
      text: "RRS Liquid Products",
      description:
        "Offers refreshing beverages including flavored water and energy drinks.",
      path: "/rrs-products",
    },
  ];

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-100px) scale(1.2)" },
    to: {
      opacity: textVisible ? 1 : 0,
      transform: textVisible
        ? "translateY(0px) scale(1)"
        : "translateY(100px) scale(1.2)",
    },
    config: { duration: 600 },
  });

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
        onSlideChange={() => {
          setTextVisible(false);
          setTimeout(() => setTextVisible(true), 600);
        }}
      >
        {work.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <div className="relative">
              <img
                src={item.image}
                alt={item.text}
                className="w-full lg:h-[80vh] object-cover"
                style={{ filter: "brightness(0.5)" }} // Darkens the image
              />
            </div>
            <animated.div
              style={textAnimation}
              className="absolute left-8 top-1/3 flex justify-start flex-col transform -translate-y-1/2 p-6"
            >
              <p className="text-white text-xl md:text-2xl lg:text-7xl font-bold text-left mb-4">
                {item.text}
              </p>
              <p className="text-white text-sm md:text-lg lg:text-xl text-left mb-4 hidden lg:block">
                {item.description}
              </p>
              <Link
                to={item.path}
                className="block border-2 border-white text-center py-2 text-white text-sm md:text-lg lg:text-xl rounded-lg transition-transform transform hover:scale-105"
                style={{ width: "200px" }}
              >
                Learn More
              </Link>
            </animated.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
