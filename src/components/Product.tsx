import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  url: string;
}

function Product({ url }: Props) {
  return (
    <Link
      href={"/"}
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      //   key={product._id}
    >
      <div className="relative w-full h-80">
        <Image
          src={url}
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />

        <Image
          src="https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md   "
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Digital Incense</span>
        <span className="font-semibold">$ 40.5</span>
      </div>

      <p className="text-sm text-gray-500">
        Perfect Mint green, organic material
      </p>
      <button className="text-primary border border-primary rounded-full w-max py-2 px-4 text-xs hover:bg-primary hover:text-white transition-colors duration-300">
        Add to Cart
      </button>
    </Link>
  );
}

export default Product;
