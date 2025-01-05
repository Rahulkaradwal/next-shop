import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  category: collections.Collection;
}

function CategoryItem({ category }: Props) {
  return (
    <Link
      href={`/list?cat=${category.slug}`}
      className="w-full flex-shrink-0  sm:w-[45%] lg:w-[19%]  "
    >
      <div className="relative bg-slate-100 w-full h-80 rounded-md">
        <Image
          src={category.media?.mainMedia?.image?.url || "./product.png"}
          alt="photo"
          fill
          sizes="25vw"
          className="rounded-md object-cover"
        />
      </div>
      <h1 className="mt-8 font-light tracking-wider">{category.name}</h1>
    </Link>
  );
}

export default CategoryItem;
