import Product from "./Product";

function NewProductsList() {
  return (
    <div className="px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 mt-24 ">
      <h1 className="text-2xl">New Products</h1>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default NewProductsList;
