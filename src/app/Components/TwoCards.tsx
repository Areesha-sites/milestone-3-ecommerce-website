import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TwoCardsPropsType } from "../../../types/componentTypes";
const TwoCards = ({ image, heading }: TwoCardsPropsType) => {
  return (
    <>
      <div
       data-aos="fade-up"
        data-aos-delay="200"
      className="lg:w-[570px] lg:h-[260px] w-full mx-auto h-[290px]  bg-black/20  text-white rounded-[20px] glass flex justify-between items-center md:flex-row flex-col gap-y-4 lg:py-12 lg:px-8 py-12">
        <div className="lg:w-[330px] lg:h-[160px] w-full h-[100px] flex justify-center gap-[8px] flex-col px-7">
          <p className="text-btnBackground text-[14px] lg:text-[16px] font-normal font-roboto whitespace-nowrap md:text-[18px]">
            Payday promo
          </p>
          <h1 className="text-white text-[18px] lg:text-[23px] md:text-[28px] uppercase font-bold font-roboto tracking-normal leading-[25px] w-[240px] md:w-[350px] md:leading-[30px]">
            {heading}
          </h1>
          <p className="lg:text-[16px] text-[12px] md:text-[14px] lg:w-[280px] text-gray-400 font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Link
            href="#"
            className="text-btnBackground lg:text-[16px] text-[12px] font-medium"
          >
            Buy Online
          </Link>
        </div>
        <div className="">
          <Image
            src={image}
            alt="burgur"
            height={100}
            width={100}
            className="lg:h-[200px] lg:w-[200px] w-[110px] h-[110px] discountImage md:w-[220px] md:h-[220px]"
          />
        </div>
      </div>
    </>
  );
};

export default TwoCards;
