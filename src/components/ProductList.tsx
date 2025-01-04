import Product from "./Product";

const url =
  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function ProductList() {
  return (
    <div className="px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 mt-24 ">
      <h1 className="text-2xl">Featured Products</h1>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Product url={url} />
        <Product url={url} />
        <Product url={url} />
        <Product url={url} />
      </div>
    </div>
  );
}

export default ProductList;
