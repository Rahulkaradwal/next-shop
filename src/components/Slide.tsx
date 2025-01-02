import Image from "next/image";
import React from "react";

interface Slide {
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
  id: number;
}

function Slide({ slide }: { slide: Slide }) {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row">
      {/* Description container */}
      <div
        className={`flex w-full lg:w-1/2 p-16 h-1/2 lg:h-full flex-col items-center justify-center gap-6 lg:gap-8 text-center ${slide.bg}`}
      >
        <h2 className="text-lg lg:text-3xl font-medium">{slide.description}</h2>
        <h1 className="text-3xl lg:text-5xl font-bold">{slide.title}</h1>
        <button
          onClick={() => (window.location.href = slide.url)}
          className="bg-black text-white px-6 py-2 rounded-lg mt-4"
        >
          SHOP NOW
        </button>
      </div>

      {/* Image Container */}
      <div className="h-full w-full lg:w-1/2 lg:h-full relative">
        <Image
          src={slide.img}
          alt={slide.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Slide;
