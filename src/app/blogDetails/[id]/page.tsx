"use client";
import React from "react";
import Image from "next/image";
import { blogsData } from "../../../../api/route";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaQuoteLeft } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { LuReplyAll } from "react-icons/lu";
import BlogSidebar from "@/app/Components/BlogSidebar";
import Link from "next/link";
interface Props {
  params: {
    id: string;
  };
}
const BlogDetails: React.FC<Props> = ({ params }) => {
  const { id } = params;
  const product = blogsData.find((item: any) => item.id === id);
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
            <Link href="/blog">Go to back</Link>
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="bg-black w-full xl:h-auto py-44 md:pt-52 lg:pt-48 pt-40 md:px-14 px-5 text-white h-[6000px] md:h-[5000px] lg:h-[4000px]">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center">
            Discover the Flavors Behind the Stories.
          </span>
          <h1 className="uppercase xl:text-[48px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center md:leading-[35px] lg:leading-[40px] lg:px-11 xl:w-[800px] xl:leading-[48px]">
            Fast & Flavorful:{" "}
            <span className="text-btnBackground"> 5-Minute</span> Meal Ideas
            You'll Love
          </h1>
          <div className="border-b-[4px] w-[100px] border-btnBackground"></div>
          <p className="text-white/70 text-[12px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full ">
            This blog dives into easy-to-follow recipes that are perfect for
            busy individuals. Learn how to prepare hearty breakfasts, fulfilling
            lunches, and simple dinners—all in under 5 minutes. Whether you're a
            working professional, a student, or a parent, these time-saving
            recipes will fit seamlessly into your schedule while delivering
            mouthwatering flavors
          </p>
        </div>
        <div className="xl:w-[700px] lg:w-[600px] h-auto text-white flex flex-col gap-[30px] md:gap-[25px] relative top-[80px]">
          <h1 className="lg:text-[32px] text-[25px] text-white font-roboto font-bold leading-[26px] lg:leading-[35px] uppercase md:text-[30px] md:leading-[35px]">
            {" "}
            <span className="text-btnBackground">Quick Cravings:</span>{" "}
            {product.title}
          </h1>
          <div className="lg:w-[370px] h-[30px] w-[290px] md:w-[500px] grid md:grid-cols-4 lg:grid-cols-3 grid-cols-2  gap-[10px] xl:grid-cols-5 xl:w-[900px]">
            <div className="flex items-center gap-[6px]">
              <FaUser className="text-btnBackground lg:w-[14px] lg:h-[14px] h-[12px] w-[12px]" />
              <p className="font-roboto text-[13px] text-white/50 font-normal">
                {product.author}
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <FaComments className="text-btnBackground w-4 h-4" />
              <p className="font-roboto text-[13px] text-white/50 font-normal">
                {product.comments} Comments
              </p>
            </div>
            <div className="flex items-center gap-[6px] col-span-2">
              <SlCalender className="text-btnBackground lg:w-4 lg:h-4 h-[12px] w-[12px]" />
              <p className="font-roboto text-[13px] text-white/50 font-normal whitespace-nowrap">
                {product.date}
              </p>
            </div>
          </div>
          <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
            {product.des}
          </p>
          <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
            {product.para1}
          </p>
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={400}
            className="lg:w-[700px] lg:h-[400px] w-full mx-auto h-[200px] md:h-[270px] md:px-20 lg:rounded-[10px] object-cover lg:px-0"
          />
          <h2 className="lg:text-[20px] text-[18px] text-white font-semibold font-roboto uppercase">
            The people who give you their food give you their heart
          </h2>
          <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
            {product.para2}
          </p>

          <div className="xlg:w-[700px] bg-btnBackground lg:h-[270px] w-full mx-auto h-auto rounded-[10px]">
            <p className="font-medium text-white lg:text-[25px] text-[20px]  flex items-center text-center xlg:px-11 lg:py-[90px] px-4 py-9 font-roboto">
              Your time is limited, so do not waste it living someone else is
              life. Do not be trapped by dogma which is living with the results
            </p>
            <FaQuoteLeft className="absolute xl:w-[100px] xl:h-[100px] lg:w-[80px] lg:h-[80px] h-[60px] w-[60px] left-[200px] text-white/50 xl:left-[550px] lg:left-[500px] top-[1090px] lg:top-[1180px] md:block hidden md:top-[837px] md:left-[580px] xl:top-[1120px]" />
          </div>
          <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
            {product.para3}
          </p>

          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <MdDone className="h-4 w-4 text-btnBackground" />
              <span className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
                {product.point1}
              </span>
            </div>

            <div className="flex gap-[10px] items-center">
              <MdDone className="h-4 w-4 text-btnBackground" />
              <span className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
                {product.point2}
              </span>
            </div>

            <div className="flex gap-[10px]  items-center">
              <MdDone className="h-4 w-4 text-btnBackground" />
              <span className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
                {product.point3}
              </span>
            </div>
            <div className="flex gap-[10px] items-center">
              <MdDone className="h-4 w-4 text-btnBackground" />
              <span className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
                {product.point4}
              </span>
            </div>
          </div>
          <h2 className="lg:text-[20px] text-[18px] text-white font-semibold font-roboto uppercase">
            People who love to eat are always the best people
          </h2>
          <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
            {product.para4}
          </p>
          <Image
            src={product.img1}
            alt={product.title}
            width={200}
            height={150}
            className="lg:h-[250px] lg:w-[250px] w-full mx-auto h-[200px] md:h-[270px] md:px-20  object-cover rounded-[10px] lg:px-0 lg:mx-0"
          />
          <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal relative lg:left-[290px] lg:w-[300px] xl:w-[400px] w-full lg:top-[-275px] left-[5px]">
            {product.para5}
          </p>
          <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal relative lg:left-[290px] lg:w-[300px] xl:w-[400px] lg:top-[-270px] w-full left-[5px]">
            {product.para6}
          </p>

          <div className="md:flex justify-between items-center md:flex-row flex-col absolute xl:top-[1930px] lg:top-[2050px] lg:w-[600px] xl:w-[680px] md:w-[680px] w-[280px] top-[2360px] left-[-10px] gap-y-[20px] ms:top-[1300px] hidden md:top-[1680px] mx-auto md:px-5 ">
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[18px] font-semibold font-roboto text-white uppercase">
                Related Tags
              </h4>

              <div className="flex gap-[15px]">
                <button className="bg-gray-700 py-[6px] rounded-[3px] px-5 text-[13px] text-white hover:bg-btnBackground transition-all duration-300 ease-linear font-roboto">
                  Design
                </button>
                <button className="bg-gray-700 py-[6px] rounded-[3px] px-5 text-[13px] text-white hover:bg-btnBackground transition-all duration-300 ease-linear font-roboto">
                  App
                </button>
                <button className="bg-gray-700 py-[6px] rounded-[3px] px-5 text-[13px] text-white hover:bg-btnBackground transition-all duration-300 ease-linear font-roboto">
                  Data
                </button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[20px] lg:gap-[10px]">
              <h4 className="text-[18px] font-semibold font-roboto text-white uppercase text-center">
                Social Share
              </h4>
              <div className="flex md:gap-[15px] gap-[5px] items-center">
                <FaFacebookF className="md:h-5 md:w-5 h-4 w-4 text-white hover:text-btnBackground transition-all duration-300 ease-in-out cursor-pointer hover:scale-110" />
                <FaTwitter className="md:h-5 md:w-5 h-4 w-4 text-white hover:text-btnBackground transition-all duration-300 ease-in-out cursor-pointer hover:scale-110" />
                <FaInstagram className="md:h-5 md:w-5 h-4 w-4 text-white hover:text-btnBackground transition-all duration-300 ease-in-out cursor-pointer hover:scale-110" />
                <FaLinkedinIn className="md:h-5 md:w-5 h-4 w-4 text-white hover:text-btnBackground transition-all duration-300 ease-in-out cursor-pointer hover:scale-110" />
              </div>
            </div>
          </div>
          <div className="relative lg:top-[-100px] top-[50px] left-[10px] lg:left-0 md:top-[100px]">
            <h1 className="text-white font-bold text-[20px] lg:text-[25px] font-roboto uppercase">
              03 Comments
            </h1>
            <div className="flex lg:justify-between md:flex-row flex-col items-start justify-start lg:w-[700px] md:gap-[20px] lg:items-center relative top-[30px] lg:left-[20px] gap-y-[10px]">
              <Image
                src="/author_img2.jpg"
                alt=""
                width={100}
                height={100}
                className="lg:h-[90px] lg:w-[90px] h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="flex xl:justify-between justify-center  ">
                <div className="flex flex-col gap-0">
                  <p className="text-white font-normal font-roboto text-[16px] lg:text-[18px]">
                    Rosalina Kelian
                  </p>
                  <p className="text-btnBackground font-normal font-roboto text-[14px] lg:text-[15px]">
                    19th May 2024
                  </p>
                  <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                    Ut enim ad minim veniam, quis nostrud laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="flex gap-[5px]">
                  <LuReplyAll className="lg:h-[20px] lg:w-[20px] h-[14px] w-[14px] text-btnBackground" />
                  <span className="lg:text-[13px] text-[12px] text-btnBackground font-normal font-roboto">
                    Reply
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[500px] w-full px-10 mx-auto relative top-[80px] left-[4px] lg:top-[-80px] lg:left-[20px] border-b-[1px] text-white/5 md:top-[130px] "></div>
          <div className="flex gap-[20px] lg:justify-between md:flex-row flex-col items-start justify-start lg:w-[700px] relative lg:top-[-60px] lg:left-[20px] md:top-[130px] gap-y-[10px] left-[10px] top-[80px]">
            <Image
              src="/author_img3.jpg"
              alt="author"
              width={100}
              height={100}
              className="lg:h-[90px] lg:w-[90px] h-[50px] w-[50px] rounded-full object-cover"
            />
            <div className="flex xl:justify-between justify-center ">
              <div className="flex flex-col gap-0">
                <p className="text-white font-normal font-roboto text-[16px] lg:text-[18px]">
                  Arista Williamson
                </p>
                <p className="text-btnBackground font-normal font-roboto text-[14px] lg:text-[15px]">
                  21th Feb 2024
                </p>
                <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna. Ut
                  enim ad minim veniam, quis nostrud laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
              <div className="flex gap-[5px]">
                <LuReplyAll className="lg:h-[20px] lg:w-[20px] h-[14px] w-[14px] text-btnBackground" />
                <span className=" text-[12px] lg:text-[13px] text-btnBackground font-normal font-roboto">
                  Reply
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-[500px] w-full px-10 mx-auto relative lg:top-[-70px] left-[4px] top-[80px] lg:left-[20px] border-b-[1px] text-white/5 md:top-[130px]"></div>
          <div className="flex xl:justify-between md:flex-row flex-col items-start lg:w-[700px] gap-[20px] xl:items-center relative lg:top-[-60px] top-[80px] lg:left-[20px] left-[10px] md:top-[130px]">
            <Image
              src="/author_img4.jpg"
              alt="author"
              width={100}
              height={100}
              className="lg:h-[90px] lg:w-[90px] h-[50px] w-[50px] rounded-full object-cover"
            />
            <div className="flex xl:justify-between justify-center ">
              <div className="flex flex-col gap-0">
                <p className="text-white font-normal font-roboto text-[16px] lg:text-[18px]">
                  Salman Ahmed
                </p>
                <p className="text-btnBackground font-normal font-roboto text-[14px] lg:text-[15px]">
                  29th Jan 2021
                </p>
                <p className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam..
                </p>
              </div>
              <div className="flex gap-[5px]">
                <LuReplyAll className="lg:h-[20px] lg:w-[20px] h-[14px] w-[14px] text-btnBackground" />
                <span className=" text-[12px] lg:text-[13px] text-btnBackground font-normal font-roboto">
                  Reply
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-[500px] w-full px-10 mx-auto relative lg:top-[-70px] lg:left-[20px] top-[80px] left-[4px] border-b-[1px] text-white/5 md:top-[130px]"></div>
          <div className="relative lg:top-[-60px] top-[80px] md:top-[130px]">
            <h1 className="text-white font-bold lg:text-[25px] text-[20px] font-roboto uppercase">
              Post Comment
            </h1>
            <div className="lg:w-[700px] lg:h-[600px] w-full px-7 mx-auto bg-gray-700/70 relative top-[30px] lg:top-[40px] p-10 flex flex-col gap-[15px] xl:px-10 ">
              <textarea
                placeholder="Type Your Comment"
                className="lg:w-[613px] w-full p-5 border-none outline-none bg-gray-700 text-[12px] lg:text-[14px] rounded-[5px] text-white/75 font-roboto font-normal"
                rows={10}
              ></textarea>
              <input
                type="text"
                className="lg:w-[613px] lg:h-[55px] h-[40px] w-full border-none outline-none rounded-[5px] bg-gray-700 lg:text-[14px] text-[12px] text-white/75 font-roboto font-normal p-5"
                placeholder="Type Your Name...."
              />
              <input
                type="text"
                className="lg:w-[613px] lg:h-[55px] h-[40px] w-full border-none outline-none rounded-[5px] bg-gray-700 text-[12px] xl:text-[14px] text-white/75 font-roboto font-normal p-5"
                placeholder="Type Your Email...."
              />
              <input
                type="text"
                className="lg:w-[613px] lg:h-[55px] h-[40px] w-full border-none outline-none rounded-[5px] bg-gray-700 text-[12px] xl:text-[14px] text-white/75 font-roboto font-normal p-5"
                placeholder="Type Your Website...."
              />
              <button className="bg-btnBackground whitespace-nowrap py-2 xl:py-3 px-4 text-white text-[12px] lg:text-[14px] font-roboto w-[140px] lg:w-[160px] font-medium hover:bg-hoverBtnBackground rounded-[5px] lg:rounded-[10px]">
                Post Your Comment
              </button>
            </div>
          </div>
        </div>
       <div className="">
       <div className="absolute xl:left-[850px] lg:left-[670px] lg:top-[500px] md:top-[3400px] md:left-[60px] top-[4400px] sm:top-[4070px] xsm:top-[4000px] xl:top-[565px]">
          <BlogSidebar />
        </div>
       </div>
      </section>
    </>
  );
};

export default BlogDetails;
