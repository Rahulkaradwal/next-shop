import Add from "@/components/Add";
import AdditionalInfo from "@/components/AdditionalInfo";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";

type Image = {
  url: string;
  width: number;
  height: number;
};

const ProductPage = async ({ params }: { params: { productName: string } }) => {
  const id = params.productName;

  const wixClient = await wixClientServer();

  const { product } = (await wixClient.products.getProduct(id)) ?? [];

  // const images = product?.media?.items.map((item) => item.image);
  const images =
    product?.media?.items
      ?.map((item) => item.image)
      ?.filter((image): image is Image => image !== undefined) || [];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 ">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages images={images} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product?.name}</h1>
        <p className="text-gray-500">{product?.description}</p>
        <div className="h-[2px] bg-gray-100" />

        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">
            {product?.price?.currency} {product?.price?.discountedPrice}
          </h3>
          <h2 className="font-medium text-2xl">
            {product?.price?.currency} {product?.price?.price}
          </h2>
        </div>

        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add
          productId={product?._id!}
          variantId={product?.variants[0]?._id!}
          stockNumber={product?.stock?.quantity!}
        />

        <div className="h-[2px] bg-gray-100" />
        {product?.additionalInfoSections &&
          product?.additionalInfoSections.map((section: any, i) => {
            if (i === product?.additionalInfoSections.length - 1) return null;
            return (
              <AdditionalInfo
                key={i}
                title={section.title}
                description={section.description}
              />
            );
          })}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        {/* <h1 className="text-2xl">User Reviews</h1> */}
      </div>
    </div>
  );
};

export default ProductPage;
