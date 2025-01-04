import CategoryList from "@/components/CategoryList";
import NewProductsList from "@/components/NewProductsList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div>
      <Slider />
      <Suspense fallback={<Spinner />}>
        <ProductList
          categoryId={process.env.WIX_FEATURED_CATEGORY_ID!}
          limit={4}
        />
      </Suspense>
      <CategoryList />
      <NewProductsList />
    </div>
  );
};

export default HomePage;
