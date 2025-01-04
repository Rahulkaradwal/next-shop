import { collections } from "@wix/stores";
import CategoryItem from "./CategoryItem";
import { wixClientServer } from "@/lib/wixClientServer";

async function CategoryList() {
  const wixClient = await wixClientServer();

  const categories = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 mt-24 ">
      <h1 className="text-2xl x-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 ">
        Categories
      </h1>
      <div className="mt-12 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
          {categories.items.map((category: collections.Collection) => (
            <CategoryItem key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
