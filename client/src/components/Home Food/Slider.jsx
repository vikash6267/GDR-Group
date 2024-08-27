import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

function HeroSlider() {
  // Hardcoded slider data
  const slider = [
    {
      _id: "6682639df9a5891201ae43dd",
      title: "CULINARY EXPORTS REDEFINING PALATES WORLDWIDE",
      desc: "We are a premier food exporter specializing in delivering the finest culinary delights to discerning palates around the world",
      image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719821220/INEXT/jmtdvvc7ofy36i9ipstl.jpg"
    },
    {
      _id: "668263caf9a5891201ae43df",
      title: "CULINARY EXPORTS REDEFINING PALATES WORLDWIDE",
      desc: "We are a premier food exporter specializing in delivering the finest culinary delights to discerning palates around the world",
      image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719821265/INEXT/wrjwsqb1tfuotdpcgpqd.png"
    },
    {
      _id: "6682641cf9a5891201ae43e5",
      title: "CULINARY EXPORTS REDEFINING PALATES WORLDWIDE",
      desc: "We are a premier food exporter specializing in delivering the finest culinary delights to discerning palates around the world",
      image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719821347/INEXT/fficfzyq0hv8wuxfxkaf.jpg"
    },
    {
      _id: "66a4f936d5954d17852bac98",
      title: "Bringing You the Finest Agricultural Products from Bharat [India]",
      desc: "Commit to a healthier lifestyle with our sustainably farmed foxnuts, packed",
      image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1722087734/INEXT/sqeyiwkkucmue9wnpooz.jpg"
    }
  ];

  return (
    <div className="relative w-full lg:h-[80vh] md:h-[70vh] h-[50vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // loop={true}
        className="absolute inset-0 w-full h-full"
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

            <div className="absolute inset-0 flex items-start justify-center z-20 p-4 lg:w-[58vw] w-[100vw] flex-col ">
              <div className="text-white">
                <h1 className="text-xl font-bold mb-4">
                  Welcome to{" "}
                  <span className="flip-text text-[#e2571a]">
                    RiSI Home Foods
                  </span>
                </h1>

                <p className="text-3xl sm:text-xl md:text-xl lg:text-6xl xl:text-7xl font-bold font-sans">
                  {item.title}
                </p>

                <p className="text-xl mt">{item.desc}</p>
              </div>

              <Link
                to="/ri-si-food/product"
                className="bg-[#e2571a] p-2 mt-5 px-5 font-sans font-semibold uppercase hover:bg-[#5A5A5A] hover:text-white transition duration-300 ease-in-out"
              >
                View All Product
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
