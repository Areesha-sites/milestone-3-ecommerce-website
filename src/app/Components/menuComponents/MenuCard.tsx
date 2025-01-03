"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { useEffect } from "react";
import CartSideMenu from "../CartSideMenu";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/app/utils/localStorageHelper";
interface Product {
  id: string,
  name: string,
   image: string,
   price: number,
   discount?: number,
   stock?: number,
   quantity: number
}
const MenuCard = ({
  id,
  image,
  name,
  price,
  discount,
  stock,
  quantity
}: Product) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      setCartItems(parsedCart);
    } catch (error) {
      console.error("Error parsing cart data from localStorage:", error);
      setCartItems([]);
    }
  }, []);
  const handleAddToCart = (product: Product) => {
    const updatedCart = [...cartItems];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id  // Use id for comparison
    );
  
    if (existingProductIndex >= 0) {
      updatedCart[existingProductIndex].quantity = (updatedCart[existingProductIndex].quantity || 0) + 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setIsSideMenuOpen(true);
  };
  const handleDeleteFromCart = (product: Product) => {
    const updatedCart = cartItems.filter(
      (item: Product) => item.name !== product.name
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };
  const handleIncreaseQuantity = (product: Product) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex(
      (item: Product) => item.name === product.name
    );
    if (productIndex >= 0) {
      updatedCart[productIndex].quantity! += 1;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };
  const handleDecreaseQuantity = (product: Product) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex(
      (item: Product) => item.name === product.name
    );
    if (productIndex >= 0 && updatedCart[productIndex].quantity! > 1) {
      updatedCart[productIndex].quantity! -= 1;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };
  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };
  const goToCart = () => {
    setIsSideMenuOpen(false);
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity!,
      0
    );
  };
  const handleAddToWishlist = () => {
    const item = { id, name, image, price, discount, stock };
    addToWishlist(item);
    setIsAddedToWishlist(true);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };
  const handleRemoveFromWishlist = () => {
    removeFromWishlist(id);
    setIsAddedToWishlist(false);
  };
  return (
    <>
      <div className="">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative w-full md:max-w-xs max-w-[270px] mx-auto overflow-hidden rounded-[20px] shadow-md card-bg"
        >
          <div
            className="w-[35px] h-[35px] wishlist-bg rounded-full flex justify-center items-center absolute right-[10px] top-[10px]"
            onClick={
              isAddedToWishlist ? handleRemoveFromWishlist : handleAddToWishlist
            }
          >
            <GoHeart
              className={`h-5 w-5 text-white cursor-pointer ${
                isAddedToWishlist ? "text-red-500" : "text-white"
              } heart-icon`}
            />
          </div>

          {showPopup && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
             
<button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
Toggle modal
</button>

<div id="popup-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
               
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
               
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Yes, I am sure
                </button>
                <button data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No cancel</button>
            </div>
        </div>
    </div>
</div>
            </div>
          )}
          <div className="flex justify-center items-center h-48 hover:bg-yellow-500 transition duration-300 rounded-[20px] ">
            <Image
              height={170}
              width={170}
              className="rounded-t-lg object-cover cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
              src={image}
              alt={name}
            />
          </div>
          <div className="mt-4 px-5 pb-5">
         
              <h5 className="text-[23px] font-semibold font-roboto text-white">
                {name}
              </h5>
         
            <div className="mt-2.5 mb-5 flex items-center justify-between">
              <div className="flex justify-start">
                <span className="mr-2 rounded bg-btnBackground text-white px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
                <div className="flex justify-center items-center">
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                </div>
              </div>
              <p>
                <span className="text-3xl font-bold text-white/50">
                  ${price}
                </span>
                <span className="text-sm text-btnBackground line-through">
                  {discount}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() =>
                  handleAddToCart({ id, image, name, price, discount, stock, quantity })
                }
                className="flex items-center rounded-md bg-btnBackground px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-hoverBtnBackground font-roboto"
              >
                <BsCart3 className="h-5 w-5 text-white mr-2 font-bold" />
                Add to cart
              </button>

              <Link
                href={`/menuDetails/${id}`}
                passHref
                className="text-white/50 font-roboto text-[15px] underline hover:text-btnBackground font-normal transition-all duration-300 ease-linear "
              >
                See More
              </Link>
            </div>
          </div>
        </div>
        <CartSideMenu
          products={cartItems}
          isOpen={isSideMenuOpen}
          onClose={closeSideMenu}
          onAddToCart={goToCart}
          onDelete={handleDeleteFromCart}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
          totalPrice={calculateTotalPrice()}
        />
      </div>
    </>
  );
};

export default MenuCard;
