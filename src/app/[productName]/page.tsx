import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const url =
  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 ">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          voluptatem dolore vero fugit possimus quam, recusandae dolor
          distinctio porro in corrupti doloribus adipisci reprehenderit deleniti
          iure sed amet! Molestiae, aperiam?
        </p>
        <div className="h-[2px] bg-gray-100" />

        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$ 49</h3>
          <h2 className="font-medium text-2xl">$20</h2>
        </div>

        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add productId="" variantId="" stockNumber={4} />

        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">PRODUCT INFO</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            facere eligendi est ea tempora, reprehenderit ducimus sunt optio
            repellendus aut autem necessitatibus? Cumque illo eius et suscipit
            dolore ipsam repellendus.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">RETURN & REFUND POLICY</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            facere eligendi est ea tempora, reprehenderit ducimus sunt optio
            repellendus aut autem necessitatibus? Cumque illo eius et suscipit
            dolore ipsam repellendus.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">SHIPPING INFO</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            facere eligendi est ea tempora, reprehenderit ducimus sunt optio
            repellendus aut autem necessitatibus? Cumque illo eius et suscipit
            dolore ipsam repellendus.
          </p>
        </div>
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        {/* <h1 className="text-2xl">User Reviews</h1> */}
      </div>
    </div>
  );
};

export default ProductPage;
