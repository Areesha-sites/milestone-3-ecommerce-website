import React from "react";
import { menuCardsPropsTypes } from "../../../types/componentTypes";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
const PopularCard = ({
  id,
  image,
  name,
  price,
  discount,
}: menuCardsPropsTypes) => {
  return (
    <>
      <div className="">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative m-10 w-full max-w-xs overflow-hidden rounded-[20px] shadow-md card-bg"
        >
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

export default PopularCard;
