import { products } from "@wix/stores";
import { wixClientServer } from "@/lib/wixClientServer";
import ProductItem from "./ProductItem";
import React from "react";
import Pagination from "./Pagination";

interface Props {
  categoryId: string;
  limit?: number;
  title?: string;
  searchParams?: any;
  style?: boolean;
}
const PRODUCT_PER_PAGE = 5;
async function ProductList({
  categoryId,
  limit,
  title,
  searchParams,
  style,
}: Props) {
  const wixClient = await wixClientServer();
  const productsQuery = await wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 99999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (sortType === "asc") {
      productsQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productsQuery.descending(sortBy);
    }
  }
  const products = await productsQuery.find();

  return (
    <div
      className={
        style ? "" : "px-4 md:px-8   lg:px-16 xl:px-32 2xl:px-64 mt-24"
      }
    >
      <h1 className="text-2xl">{title}</h1>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between  flex-wrap">
        {products.items.map((product: products.Product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
      <Pagination
        hasNext={products.hasNext()}
        hasPrev={products.hasPrev()}
        currentPage={products.currentPage || 0}
      />
    </div>
  );
}

export default ProductList;
