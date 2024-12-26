"use client";
import React, { useState, useEffect } from "react";
import { testimonialsData } from "../../../api/route";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
const TestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[600px] mx-auto ">
      <div className="lg:w-[868.47px] lg:h-[360px] md:w-[600px] md:h-[450px] w-[300px] ms:w-full sm:w-full xsm:w-full h-[300px] relative md:top-[300px] lg:left-[150px] xl:left-0 top-[230px] left-[-10px] card-bg shadow-custom xl:mx-auto sm:left-0">
        <div className="md:w-[696.57px] md:h-[485.89px] w-[300px] h-[200px] relative md:left-[85px] left-[10px] top-[20px]  flex flex-col justify-center items-center ">
          <Image
            src={testimonialsData[currentIndex].image}
            alt={testimonialsData[currentIndex].name}
            height={134}
            width={133}
            className="lg:w-[110px] lg:h-[110px] w-[60px] h-[60px] absolute lg:bottom-[440px] bottom-[200px] object-cover rounded-full left-[120px] xsm:left-[150px] md:w-[100px] md:h-[100px] md:bottom-[440px] md:left-[190px] xl:left-[290px]"
          />
          <Image
            src="/quote-mark-svgrepo-com.svg"
            alt="quotes-image"
            height={48}
            width={48}
            className="lg:w-[38px] lg:h-[38px] md:w-[36px] md:h-[36px] md:top-[-90px] md:left-[-100px] xl:left-0 w-[25px] h-[25px] relative lg:top-[-50px] top-[5px] xsm:left-[30px]"
          />
          <p className="lg:w-[696.57px] lg:h-[103.97px] w-[300px] h-[100px] relative text-center md:text-[14px] text-[10px] md:bottom-0 md:top-[-40px] top-[10px] bottom-[10px] md:px-5 px-7 text-white/50 font-roboto xsm:w-[375px] xs:left-[-10px] ms:w-[380px] ms:left-[10px] xsm:left-[30px] sm:w-[350px] sm:left-[10px] md:left-[-100px] xl:left-[-20px] mx-auto" >
            {testimonialsData[currentIndex].desc}
          </p>
          <div className="flex justify-center items-center gap-[5px] relative md:top-[-30px] top-[70px] sm:top-[50px] sm:left-[10px] xsm:left-[40px] md:left-0">
            <IoStar className="h-[14px] w-[14px] text-btnBackground" />
            <IoStar className="h-[14px] w-[14px] text-btnBackground" />
            <IoStar className="h-[14px] w-[14px] text-btnBackground" />
            <IoStar className="h-[14px] w-[14px] text-btnBackground" />
            <IoStar className="h-[14px] w-[14px] text-btnBackground" />
          </div>
          <h3 className="md:w-[159px] md:h-[32px] font-roboto font-bold md:text-[26px] text-[16px] text-white whitespace-nowrap md:bottom-0 bottom-[25px] xl:left-0 xl:top-[-30px] relative top-[80px] text-center sm:top-[70px] sm:left-[10px] xsm:left-[40px]">
            {testimonialsData[currentIndex].name}
          </h3>
          <p className="w-[110px] h-[24px] font-normal md:text-[16px] xl:text-[14px] text-[10px] relative md:bottom-0 bottom-[35px] ml-8 top-[75px] left-[-20px] whitespace-nowrap text-white/50 font-roboto text-center md:top-[-25px] md:left-[-20px] sm:top-[70px] sm:left-[-10px] xsm:left-[20px]">
            &quot;{testimonialsData[currentIndex].profession}&quot;
          </p>
        </div>
        <div className="flex justify-center space-x-2 relative md:top-[-100px] top-[120px]">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`md:w-[10px] md:h-[10px] w-[8px] h-[8px] rounded-full ${
                index === currentIndex
                  ? "bg-[#ff9f0d]"
                  : "bg-[#ff9f0d] opacity-[30%]"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TestimonialCards;
