import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";

interface Props {
  product: products.Product;
}

function ProductItem({ product }: Props) {
  return (
    <Link
      href="/"
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      key={product._id}
    >
      <div className="relative w-full h-80">
        <Image
          src={product.media?.mainMedia?.image?.url || "./product.png"}
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />

        {product.media?.items && (
          <Image
            src={product.media?.items[1]?.image?.url || "./product.png"}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md   "
          />
        )}
      </div>
      <div className="flex justify-between">
        <span className="font-medium">
          {product.name?.split(" ").slice(0, 3).join(" ")}
        </span>
        <span className="font-semibold">$ {product.price?.price}</span>
      </div>

      {product.additionalInfoSections && (
        <div
          className="text-sm text-gray-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              product.additionalInfoSections
                ?.find((section: any) => section.title === "shortDesc")
                ?.description?.split(" ")
                .slice(0, 5)
                .join(" ") || ""
            ),
          }}
        ></div>
      )}
      <button className="text-primary border border-primary rounded-full w-max py-2 px-4 text-xs hover:bg-primary hover:text-white transition-colors duration-300">
        Add to Cart
      </button>
    </Link>
  );
}

export default ProductItem;
