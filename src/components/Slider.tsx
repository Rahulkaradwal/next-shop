"use client";

import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import SliderButton from "./SliderButton";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex < slides.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0"
            style={{ width: "100vw" }}
          >
            <Slide slide={slide} />
          </div>
        ))}
      </div>
      <SliderButton
        slides={slides}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
    </div>
  );
}

export default Slider;
