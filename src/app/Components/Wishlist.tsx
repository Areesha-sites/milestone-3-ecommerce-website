"use client";
import React, { useState, useEffect } from "react";
import { getWishlist } from "../utils/localStorageHelper";
import { PiSmileySadLight } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBinLine } from "react-icons/ri";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const savedWishlist = getWishlist();
    setWishlist(savedWishlist);
  }, []);
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
                It Look like you Have not added any tasty dishes yet.
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
            <span className="text-[18px] mb-[-30px] font-greatVibes text-btnBackground font-normal">
              Save Your Favorite Flavors for Later.
            </span>
            <h1 className="uppercase text-[48px] font-bold font-poppins">
              Your Delicious{" "}
              <span className="text-btnBackground">Wishlist</span> Awaits!
            </h1>
            <div className="border-b-[4px] w-[100px] border-btnBackground"></div>
            <p className="text-white/70 text-[14px] font-roboto font-normal w-[800px] text-center">
              At ChowChampl, we know how hard it is to pick just one dish. Now,
              with our wishlist feature, you can save your favorite menu items
              and come back to them whenever you're ready to indulge. From
              mouth-watering appetizers to delectable desserts, your next
              craving is just a click away. Start building your list of cravings
              today and never miss out on your favorite treats!
            </p>
            <div className="flex items-center justify-between card-bg text-white w-[1100px] h-[70px] relative top-[20px] px-10 border-b-[1px] border-white/30 rounded-[4px]">
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
          {wishlist.map((item: any) => (
            <div
              key={item.id}
              className="flex justify-between items-center w-[1100px] relative top-[40px] px-9 py-4 border-b-[1px] border-white/30"
            >
              <Image
                src={item.image}
                alt={item.name}
                height={100}
                width={100}
                className="h-[60px] w-[60px] discountImage"
              />
              <div className="flex flex-col gap-[3px]">
                <h2 className="w-[200px] text-white font-medium  font-roboto text-[14px]">
                  {item.name}
                </h2>
                <span className="">{item.discount}</span>
              </div>
              <p className="w-[100px] relative left-[-25px]">${item.price}</p>
              <p
                className={`w-[100px] h-[20px] bg-yellow-500 relative left-[-35px] ${
                  item.stock === "In Stock" ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.stock}
              </p>
              <button
                className={`px-4 py-2 rounded text-white ${
                  item.stock === "In Stock"
                    ? "bg-btnBackground"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={item.stock !== "In Stock"}
              >
                {item.stock === "In Stock" ? "Add to Cart" : "Out of Stock"}
              </button>
              <RiDeleteBinLine className="h-6 w-6 text-white cursor-pointer" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
