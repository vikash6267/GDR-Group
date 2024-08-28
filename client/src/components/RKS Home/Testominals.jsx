import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./TestominalSlider";

export default function TestimonialSection() {
  return (
    <div className="my-10 text-white">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
        Over <span className="text-primary text-3xl font-black">1000+</span>{" "}
        happy <br />
        customers
      </h2>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className="custom-class"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Tru made selling my house a breeze! Their expert guidance and personalized service were top-notch.",
    type: "Seller",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I was amazed at how quickly my house sold with Tru. Highly recommended!",
    type: "Buyer",
  },
  {
    name: "Samuel Green",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "The team at Tru provided excellent service and support throughout the selling process.",
    type: "Seller",
  },
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Tru made selling my house a breeze! Their expert guidance and personalized service were top-notch.",
    type: "Seller",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I was amazed at how quickly my house sold with Tru. Highly recommended!",
    type: "Buyer",
  },
  {
    name: "Samuel Green",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "The team at Tru provided excellent service and support throughout the selling process.",
    type: "Seller",
  },
];
