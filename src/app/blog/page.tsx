"use client"
import React from "react";
import BlogCardsList from "../Components/BlogCardsList";
import BlogSidebar from "../Components/BlogSidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blog = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    }, []);
  return (
    <>
      <section className="bg-black w-full h-auto md:py-[500px] md:pt-44 lg:pt-48 pt-40 md:px-14 px-5 text-white ">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span
          
            data-aos="fade-up"
              data-aos-delay="200"
          className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center">
            Serving Stories, One Bite at a Time.
          </span>
          <h1
            data-aos="fade-up"
              data-aos-delay="200"
          className="uppercase xl:text-[48px] lg:w-[500px] xl:w-[700px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center md:leading-[45px]">
            5-Minute <span className="text-btnBackground">Recipes</span> for
            Busy Weekdays
          </h1>
          <div
            data-aos="fade-up"
              data-aos-delay="200"
          className="border-b-[4px] w-[100px] border-btnBackground"></div>
          <p
            data-aos="fade-up"
              data-aos-delay="200"
          className="text-white/70 text-[12px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full ">
            Discover delicious and quick meals that save your time and energy!
          </p>
        </div>
        <div className="xl:px-7 relative xl:top-[50px] top-[70px] md:h-[2400px] h-[4600px] xl:left-[-170px] xl:h-auto lg:h-auto lg:left-[-180px]">
          <BlogCardsList />
        </div>
        <div className="absolute xl:top-[450px] top-[3280px] xl:left-[860px] md:left-[415px] left-[14px] md:top-[463px] lg:left-[650px] lg:top-[445px]">
          <BlogSidebar />
        </div>
      </section>
    </>
  );
};

export default Blog;
