"use client";
import React, { useState, useEffect } from "react";
import { getWishlist, removeFromWishlist } from "../utils/localStorageHelper";
import { PiSmileySadLight } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { IoMdTrash } from "react-icons/io";
import { WishlistItem } from "../../../types/componentTypes";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  useEffect(() => {
    const savedWishlist = getWishlist();
    setWishlist(savedWishlist);
  }, []);
  const handleDelete = (itemId: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(updatedWishlist);
    removeFromWishlist(itemId);
  };
  return (
    <div className="flex justify-center items-center flex-col relative top-[30px]">
      {wishlist.length === 0 ? (
        <>
          <h1 className="uppercase text-[48px] font-bold font-poppins">
            You <span className="text-btnBackground">Wishlist</span> is Hungry!
          </h1>
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <div className="flex gap-[5px] w-[500px] justify-center items-center">
              <p className="text-white/70 text-[14px] font-roboto font-normal  text-center">
                It looks like you have not added any tasty dishes yet.
              </p>
              <PiSmileySadLight className="h-[20px] w-[20px] text-white/50" />
            </div>
            <p className="text-white/70 text-[14px] font-roboto font-normal  text-center">
              Explore our menu and start adding your favorite meals to your
              wishlist. The more you add, the easier it is to indulge later!
            </p>
            <Link href="/menu">
              <button className="h-[40px] w-[130px] text-[14px] font-roboto text-white font-medium outline-none px-5 py-2 rounded-[6px] bg-btnBackground whitespace-nowrap hover:bg-hoverBtnBackground">
                Browse Menu
              </button>
            </Link>
            <Image
              src="/sad.jpg"
              alt="illustration"
              height={100}
              width={100}
              className="h-[300px] w-[300px] object-cover"
            />
          </div>
        </>
      ) : (
        <div>
          <div className="flex justify-center items-center flex-col gap-y-5">
            <span className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center">
              Save Your Favorite Flavors for Later.
            </span>
            <h1 className="uppercase xxl:text-[54px] xl:text-[48px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center">
              Your Delicious{" "}
              <span className="text-btnBackground">Wishlist</span> Awaits!
            </h1>
            <div className="border-b-[4px] w-[100px] border-btnBackground"></div>
            <p className="text-white/70 xxl:text-[16px] text-[12px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full">
              At ChowChampl, we know how hard it is to pick just one dish. Now,
              with our wishlist feature, you can save your favorite menu items
              and come back to them whenever you're ready to indulge.
            </p>
            <div className="">
              <div className="flex items-center justify-between card-bg text-white xl:w-[1100px] md:w-[700px] lg:w-[900px] h-[70px] relative top-[20px] px-10 border-b-[1px] border-white/30 rounded-[4px]">
                <h2 className="text-white font-bold font-roboto text-[14px]">
                  Image
                </h2>
                <h2 className="text-white font-bold font-roboto text-[14px]">
                  Product
                </h2>
                <h2 className="text-white font-bold font-roboto text-[14px]">
                  Amount
                </h2>
                <h2 className="text-white font-bold font-roboto text-[14px]">
                  Status
                </h2>
                <h2 className="text-white font-bold font-roboto text-[14px]">
                  Action
                </h2>
                <h2 className="text-white font-bold font-roboto text-[14px]">
                  Remove
                </h2>
              </div>
            </div>
          </div>
          <div className="">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center xl:w-[1100px] lg:w-[900px] md:w-[750px] relative top-[40px] xl:px-9 lg:px-8 md:px-0 py-4 border-b-[1px] border-white/30"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                  className="h-[60px] w-[60px] discountImage"
                />
                <div className="flex flex-col gap-[3px]">
                  <h2 className="w-[200px] text-white font-medium font-roboto text-[14px]">
                    {item.name}
                  </h2>
                  <span>{item.discount}</span>
                </div>
                <p className="w-[100px] relative left-[-25px]">${item.price}</p>
                <p className="w-[100px] relative left-[-25px]">
                  <span
                    className={`${
                      item.stock === "In Stock"
                        ? "text-green-500 p-1 rounded"
                        : " text-red-500 p-1 rounded"
                    }`}
                  >
                    {item.stock === "In Stock" ? "Available" : "Sold Out"}
                  </span>
                </p>
                <button
                  className={`px-4 py-2 rounded text-white ${
                    item.stock === "In Stock"
                      ? "bg-btnBackground"
                      : " cursor-not-allowed"
                  }`}
                  disabled={item.stock !== "In Stock"}
                >
                  {item.stock === "In Stock" ? "Add to Cart" : "Out of Stock"}
                </button>
                <IoMdTrash
                  className="h-6 w-6 text-btnBackground cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Wishlist;
