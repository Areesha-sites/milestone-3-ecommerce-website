import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import { BlogsCardsPropsTypes } from "../../../types/componentTypes";
const BlogCard = ({
  id,
  image,
  author,
  comments,
  date,
  title,
  des,
}: BlogsCardsPropsTypes) => {
  return (
    <>
      <div className="xl:w-[700px] xl:h-[700px] lg:w-[600px] lg:h-[600px] w-full  text-white flex flex-col gap-[15px] justify-center mx-auto ">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-[200px] lg:h-[400px] rounded-[10px] object-cover"
        />
        <div className=" grid lg:grid-cols-3 grid-cols-2 md:grid-cols-3 gap-[10px]">
          <div className="flex items-center gap-[6px]">
            <FaUser className="text-btnBackground w-[14px] h-[14px]" />
            <p className="font-roboto text-[13px] text-white/50 font-normal">
              {author}
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <FaComments className="text-btnBackground xl:w-4 xl:h-4 h-3 w-3" />
            <p className="font-roboto text-[13px] text-white/50 font-normal">
              {comments} Comments
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <SlCalender className="text-btnBackground xl:w-4 xl:h-4 h-3 w-3" />
            <p className="font-roboto text-[13px] text-white/50 font-normal whitespace-nowrap">
              {date}
            </p>
          </div>
        </div>
        <h1 className="xl:text-[32px] text-[22px] text-white font-roboto font-bold xl:leading-[35px] leading-[25px] mt-5">
          <span className="text-btnBackground">QUICK CRAVINGS: </span>
          {title}
        </h1>
        <p className="text-white/50 font-normal font-roboto text-[12px] xl:text-[14px]">
          {des}
        </p>
        <div className="flex gap-[7px] items-center underline">
          <Link
            href={`/blogDetails/${id}`}
            passHref
            className="text-btnBackground hover:text-white text-[12px] xl:text-[14px] font-roboto font-medium hover:text-btnBackground transition-all duration-200 ease-linear "
          >
            Read More
          </Link>
          <HiOutlineArrowRight className=" w-[15px] h-[15px] text-btnBackground hover:text-white cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
