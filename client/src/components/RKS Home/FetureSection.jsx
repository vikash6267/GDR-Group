import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import h1 from "../../assests/home/h1.jpg";
import h4 from "../../assests/home/h4.jpg";
import fd from "../../assests/gallery/fd.jpg";
import fh from "../../assests/gallery/fh.jpg";
import cl from "../../assests/gallery/cl.jpg";
import re from "../../assests/gallery/re.jpeg";
import c from "../../assests/gallery/collage.jpeg";

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-3xl mx-auto w-full text-center font-bold text-gray-800 mb-8">
        Why sell and purchase your house with RKS Home?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-5">
        <AnimatedCard index={1} imageSrc={h1} heading="Agriculture Farm Land" />
        <AnimatedCard
          index={2}
          imageSrc={fd}
          heading="Agriculture Farm House"
        />
        <AnimatedCard
          index={3}
          imageSrc={h4}
          heading="Agriculture Land And Farm House Developement"
        />
        <AnimatedCard index={3} imageSrc={cl} heading="Commercial Land" />
        <AnimatedCard index={3} imageSrc={re} heading="Resort" />
        <AnimatedCard index={3} imageSrc={c} heading="College" />
        <AnimatedCard index={3} imageSrc={fh} heading="Farm House" />
        <AnimatedCard
          index={3}
          imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/95/07/limak-eurasia-luxury.jpg?w=700&h=-1&s=1"
          heading="Hotel"
        />
        <AnimatedCard
          index={3}
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUGSCAJ5lnrrmleJ1LVIW_7u2omoCkgAXSg&s"
          heading="House"
        />
        <AnimatedCard
          index={3}
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalUt-hv788-uXN_J9T1MjncH0XKdzuVKe1g&s"
          heading="Farm House"
        />
        <AnimatedCard
          index={3}
          imageSrc="https://farmloans.com/wp-content/uploads/2023/03/The-Benefits-Of-Owning-Agricultural-Land-For-Farming-And-Investment1.2-e1680126871212.jpg"
          heading="Farm Land"
        />
      </div>
    </section>
  );
};

const AnimatedCard = ({ index, imageSrc, heading, details, buttonText }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      key={index}
      viewport={{ once: true }}
    >
      <img src={imageSrc} alt="Card" className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
          {heading}
        </h3>
        {/* <p className="text-gray-600 mb-6">{details}</p> */}
        {/* <div className="border text-center border-slate-700 p-2">
          {buttonText}
        </div> */}
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
