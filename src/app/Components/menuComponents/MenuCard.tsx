import React, { useState } from "react";
import { menuCardsPropsTypes } from "../../../../types/componentTypes";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "@/app/utils/localStorageHelper";
const MenuCard = ({
  id,
  image,
  name,
  price,
  discount,
  stock,
}: menuCardsPropsTypes) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToWishlist = () => {
    const item = { id, name, image, price, discount, stock,  };
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
        className="relative w-full md:max-w-xs max-w-[270px] mx-auto overflow-hidden rounded-[20px] shadow-md card-bg">
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
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-lg">
              Added to Wishlist
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
            <Link href="#">
              <h5 className="text-[23px] font-semibold font-roboto text-white">
                {name}
              </h5>
            </Link>
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
              <Link
                href="#"
                className="flex items-center rounded-md bg-btnBackground px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-hoverBtnBackground font-roboto"
              >
                <BsCart3 className="h-5 w-5 text-white mr-2 font-bold" />
                Add to cart
              </Link>

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
      </div>
    </>
  );
};

export default MenuCard;
