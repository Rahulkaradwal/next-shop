import CategoryList from "@/components/CategoryList";
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
          title="Featured Products"
          categoryId={process.env.WIX_FEATURED_CATEGORY_ID!}
          limit={4}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <CategoryList />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ProductList
          title="New Arrivals"
          limit={4}
          categoryId={process.env.WIX_NEW_PRODUCT_CATEGORY_ID!}
        />
      </Suspense>
    </div>
  );
};

export default HomePage;
