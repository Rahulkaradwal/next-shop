import CategoryList from "@/components/CategoryList";
import NewProductsList from "@/components/NewProductsList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  const wixClient = await wixClientServer();
  const { items } = await wixClient.products.queryProducts().find();

  console.log(items);

  return (
    <div className="">
      <Slider />
      <ProductList />
      <CategoryList />
      <NewProductsList />
    </div>
  );
};

export default HomePage;
