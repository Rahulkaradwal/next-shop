import Link from "next/link";
import Product from "./Product";
import Image from "next/image";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  return (
    // <div className="px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 mt-24 ">
    <div className="px-4 mt-24 ">
      <h1 className="text-2xl x-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 ">
        Categories
      </h1>
      <div className="mt-12 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
