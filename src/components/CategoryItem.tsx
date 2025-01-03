import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryItem() {
  return (
    <Link
      href="/list?cat=test"
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src="https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="photo"
          fill
          sizes="25vw"
          className="rounded-md"
        />
      </div>
      <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
    </Link>
  );
}

export default CategoryItem;
