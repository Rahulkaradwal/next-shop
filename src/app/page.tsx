import CategoryList from "@/components/CategoryList";
import NewProductsList from "@/components/NewProductsList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const HomePage = () => {
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
