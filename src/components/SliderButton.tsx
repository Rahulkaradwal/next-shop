import React from "react";

type Slide = {
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
  id: number;
};

interface Props {
  slides: Slide[];
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

function SliderButton({ slides, slideIndex, setSlideIndex }: Props) {
  return (
    <div className="absolute flex cursor-pointer m-auto left-1/2 bottom-8 gap-4">
      {slides.map((slide, index) => (
        <div
          className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
            slideIndex === index ? "scale-150" : ""
          } `}
          key={slide.id}
          onClick={() => setSlideIndex(index)}
        >
          {slideIndex === index && (
            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full "> </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SliderButton;

{
  /* <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
{slides.map((slide, index) => (
  <div
    className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
      current === index ? "scale-150" : ""
    }`}
    key={slide.id}
    onClick={() => setCurrent(index)}
  >
    {current === index && (
      <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
    )}
  </div>
))}
</div> */
}
