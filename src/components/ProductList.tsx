import { products } from "@wix/stores";
import { wixClientServer } from "@/lib/wixClientServer";
import ProductItem from "./ProductItem";

const url =
  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

interface Props {
  categoryId: string;
  limit: number;
}
async function ProductList({ categoryId, limit }: Props) {
  const wixClient = await wixClientServer();
  const { items: featuredProducts } = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 4)
    .find();

  return (
    <div className="px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 mt-24 ">
      <h1 className="text-2xl">Featured Products</h1>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {featuredProducts.map((product: products.Product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
