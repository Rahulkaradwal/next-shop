import Image from "next/image";
import React from "react";

function CartModel() {
  const cartItems = true;
  return (
    <div className="absolute top-12 -left-40   bg-gray-100 p-4 text-sm rounded-md shadow-md z-20 w-64  ">
      {cartItems ? (
        <div className="flex flex-col gap-2">
          <h2 className="mb-2"> Shopping Cart</h2>
          <div className="flex mb-2 justify-between h-16 gap-2 content-stretch ">
            <div className="flex-1">
              <Image
                src="https://images.pexels.com/photos/16967183/pexels-photo-16967183/free-photo-of-vial-of-perfume.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="product"
                width={44}
                height={44}
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-2 flex flex-col justify-between">
              <div>
                <p className="font-semibold text-sm">Digital Incense</p>
                <p className="text-gray-500 text-xs">available</p>
              </div>
              <p className="text-gray-500 text-xs">Qty 1</p>
            </div>
            <div className="flex-1 flex flex-col justify-between text-right">
              <p className="text-xs">$ 40.5</p>
              <button className="text-blue-400 text-xs">Remove</button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold text-sm">Subtotal</p>
            <p className="font-semibold text-xs">$ 40.5</p>
          </div>
          <p className="text-xs text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="flex justify-between">
            <button className="px-3 text-xs py-2 border rounded-md bg-white text-black hover:bg-black hover:text-white transition-all duration-300 ">
              View cart
            </button>
            <button className="px-3 text-xs py-2 border rounded-md bg-black text-white hover:bg-white hover:text-black transition-all duration-300 ">
              Check out
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <h2 className="mb-2"> Shopping Cart</h2>
          <p className="text-xs text-gray-500">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}

export default CartModel;
