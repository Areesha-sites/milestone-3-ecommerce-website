"use client";
import Link from "next/link";
import { menuData } from "../../../../api/route";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "@/app/utils/localStorageHelper";
interface Props {
  params: {
    id: string;
  };
}
const MenuDetails: React.FC<Props> = ({ params }) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
  const [count, setCount] = useState<number>(1);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const { id } = params;
  const product = menuData.find((item: any) => item.id === id);
  if (!product) {
    return (
      <div className="bg-black w-full py-28 h-auto pt-52 px-14 text-white">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <h1 className="uppercase text-[60px] font-bold font-poppins w-[600px] mx-auto text-center text-btnBackground ">
            404
          </h1>
          <h1 className="uppercase text-[38px] font-bold font-poppins w-[600px] mx-auto text-center leading-[50px]">
            This Page Doesn't Exist.
          </h1>
          <div className="border-b-[4px] w-[100px] border-btnBackground"></div>
          <p className="text-white/70 text-[14px] font-roboto font-normal w-[800px] text-center">
            It looks like nothing was found at this location.
          </p>
          <button className="py-2 px-5 bg-btnBackground rounded-[5px] hover:bg-hoverBtnBackground text-white text-[13px] font-roboto font-semibold">
            <Link href="/menu">Go to back</Link>
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="bg-black w-full h-auto md:py-60 md:pt-52 py-44 lg:pt-48 pt-40 md:px-14 px-5 text-white ">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center">
            Satisfy Your Cravings with Every Bite.
          </span>
          <h1 className="uppercase xl:text-[48px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center">
            Discover Our <span className="text-btnBackground">Menu</span>
          </h1>
          <div className="border-b-[4px] w-[100px] border-btnBackground"></div>
          <p className="text-white/70 text-[12px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full ">
            Explore a world of delicious flavors crafted to perfection. From
            appetizers to desserts, find everything you need to indulge in your
            favorite meals. Every dish is made with high-quality ingredients to
            bring you an unforgettable dining experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full mx-auto gap-y-[30px] ">
          <div className="xl:w-[500px] xl:h-[350px] lg:w-[400px] lg:h-[300px]  md:w-[300px] md:h-[260px]  rounded-[10px] card-bg relative top-[80px] xl:left-[40px] flex justify-center items-center hover:bg-yellow-500 transition duration-300 ease-linear cursor-pointer ">
            <Image
              src={product.image}
              alt="menu-image"
              height={200}
              width={200}
              className="xl:h-[300px] xl:w-[360px] lg:h-[270px] lg:w-[340px] md:w-[230px] md:h-[200px] hover:scale-105 transition-all ease-linear duration-300"
            />
          </div>
          <div className="flex flex-col justify-center relative top-[80px]">
            <span className="px-3 py-1 xl:text-[14px] md:text-[12px] text-[11px] text-white font-roboto font-medium bg-btnBackground rounded-[5px] w-[80px] text-center whitespace-nowrap">
              {product.stock}
            </span>
            <h1 className="xl:text-[45px] text-[30px] md:text-[35px] font-bold font-roboto text-white whitespace-nowrap">
              {product.name}
            </h1>
            <p className="text-white/50 text-[14px] font-roboto ">
              {product.des}
            </p>
            <div className="lg:w-[400px] md:w-[360px] border-b-[1px] border-white/5 xl:my-2 my-2"></div>
            <div className=" flex items-center justify-between lg:w-[360px] md:w-[330px] w-[290px]">
              <p>
                <span className="text-[33px] font-bold text-white/50">
                  ${product.price}
                </span>
                <span className="text-[16px] text-btnBackground line-through">
                  {product.discount}
                </span>
              </p>
              <div className="flex justify-start">
                <span className="mr-2 rounded bg-btnBackground text-white px-3 py-1 text-[12px] font-semibold">
                  5.0
                </span>
                <div className="flex justify-center items-center">
                  <MdOutlineStar className="h-[18px] w-[18px] text-btnBackground" />
                  <MdOutlineStar className="h-[18px] w-[18px] text-btnBackground" />
                  <MdOutlineStar className="h-[18px] w-[18px] text-btnBackground" />
                  <MdOutlineStar className="h-[18px] w-[18px] text-btnBackground" />
                  <MdOutlineStar className="h-[18px] w-[18px] text-btnBackground" />
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-[30px] lg:mt-5 mt-3">
              <div className="flex justify-center items-center h-[38px] border-[1px] border-white/5 w-[130px] mt-0 rounded-[6px] cursor-pointer">
                <FaMinus
                  onClick={handleDecrease}
                  className="h-3 w-3 text-white"
                />
                <span className="border-b-[1px] border-white/10 w-[34px] rotate-90"></span>
                <p className="text-[14px] font-roboto text-white font-bold">
                  {count}
                </p>
                <span className="border-b-[1px] border-white/10 w-[34px] rotate-90"></span>
                <FaPlus
                  onClick={handleIncrease}
                  className="h-3 w-3 text-white"
                />
              </div>
              <button className="h-[36px] w-[150px] bg-btnBackground px-4 py-2 flex justify-center items-center gap-[6px] rounded-[3px] hover:bg-hoverBtnBackground">
                <IoCartOutline className="h-4 w-4 text-white" />
                <Link
                  href="/cart"
                  className="text-white font-roboto font-medium text-[14px] whitespace-nowrap"
                >
                  Add to cart
                </Link>
              </button>
            </div>
            <div className="lg:w-[400px] md:w-[360px] border-b-[1px] border-white/5 md:my-2  lg:my-4 my-4"></div>
            <div
              onClick={
                isAddedToWishlist
                  ? handleRemoveFromWishlist
                  : handleAddToWishlist
              }
              className="flex justify-start gap-[5px] items-center lg:mt-5"
            >
              <IoMdHeartEmpty
                className={`h-5 w-5 text-white cursor-pointer ${
                  isAddedToWishlist ? "text-red-500" : "text-white"
                }`}
              />
              <Link
                href="/wishlist"
                className="text-white/50 font-normal hover:text-white transition-all duration-300 ease-linear text-[14px] font-roboto"
              >
                Add to Wishlist
              </Link>
            </div>
            <div className="flex gap-[10px] mt-4">
              <p className="text-[15px] font-normal text-white font-roboto">
                Share :
              </p>
              <div className="flex justify-center items-center gap-[5px] mt-[-2px]">
                <div className="w-[25px] h-[25px] rounded-full card-bg flex justify-center items-center hover:bg-btnBackground cursor-pointer duration-300 transition-all ease-in-out">
                  <RiFacebookFill className="h-4 w-4" />
                </div>
                <div className="w-[25px] h-[25px] rounded-full card-bg flex justify-center items-center hover:bg-btnBackground cursor-pointer duration-300 transition-all ease-in-out">
                  <FaInstagram className="h-3 w-3" />
                </div>
                <div className="w-[25px] h-[25px] rounded-full card-bg flex justify-center items-center hover:bg-btnBackground cursor-pointer duration-300 transition-all ease-in-out">
                  <FaTwitter className="h-3 w-3" />
                </div>
                <div className="w-[25px] h-[25px] rounded-full card-bg flex justify-center items-center hover:bg-btnBackground cursor-pointer duration-300 transition-all ease-in-out">
                  <FaYoutube className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="lg:w-[400px] md:w-[360px] border-b-[1px] border-white/5 my-4 lg:my-4"></div>
          </div>
        </div>
        <div className="flex justify-start gap-[20px] items-center relative lg:top-[100px] xl:left-[40px] md:top-[130px] top-[90px]">
          <button className="h-[40px] w-[120px] bg-btnBackground px-4 py-2 hover:bg-hoverBtnBackground text-[14px] font-roboto font-medium ">
            Description
          </button>
          <p className="text-white/50 font-roboto text-[14px] font-normal">
            Reviews ({product.reviews})
          </p>
        </div>
        <div className="flex flex-col gap-[20px] relative md:top-[170px] lg:top-[120px] xl:w-[980px] lg:w-[940px] xl:left-[40px] top-[130px]">
          <p className="text-white/50 font-roboto lg:text-[14px] text-[12px] font-normal">
            {product.des1}
          </p>
          <p className="text-white/50 font-roboto lg:text-[14px] text-[12px] font-normal">
            {product.des2}
          </p>
          <h1 className="text-[25px] text-white font-bold font-roboto">
            Key Benefits
          </h1>
          <ul className="ml-4 list-disc flex flex-col gap-y-[3px]">
            <li className="text-white/50 font-roboto lg:text-[14px] text-[12px] font-normal">
              {product.benefits1}
            </li>
            <li className="text-white/50 font-roboto lg:text-[14px] text-[12px] font-normal">
              {product.benefits2}
            </li>
            <li className="text-white/50 font-roboto lg:text-[14px] text-[12px] font-normal">
              {product.benefits3}
            </li>
            <li className="text-white/50 font-roboto lg:text-[14px] text-[12px] font-normal">
              {product.benefits4}
            </li>
            <li className="text-white/50 font-roboto lg:text-[14px] text-[12px] font-normal">
              {product.benefits5}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuDetails;
