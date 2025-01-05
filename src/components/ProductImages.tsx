"use client";

import Image from "next/image";
import { useState } from "react";

type Image = {
  url: string;
  width: number;
  height: number;
};

interface ProductImagesProps {
  images: Image[];
}

const ProductImages = ({ images }: ProductImagesProps) => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="">
      <div className="h-[500px] relative">
        {/* Fallback image */}
        {isLoading && (
          <Image
            src="/product.png"
            alt=""
            fill
            sizes="50vw"
            className="object-cover rounded-md"
          />
        )}
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          // className="object-cover rounded-md"
          className={`object-cover rounded-md transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
