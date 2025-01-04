import Image from "next/image";
import Link from "next/link";
import React from "react";

const url =
  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function CategoryItem() {
  return (
    <Link
      href="/list?cat=test"
      // className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
      className="w-full flex-shrink-0  sm:w-[45%] lg:w-[19%]  "
    >
      <div className="relative bg-slate-100 w-full h-80 rounded-md">
        <Image
          src={url}
          alt="photo"
          fill
          sizes="25vw"
          className="rounded-md object-cover"
        />
      </div>
      <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
    </Link>
  );
}

export default CategoryItem;
