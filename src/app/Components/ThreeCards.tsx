import React from "react";
import Image from "next/image";
import { ThreeCardsPropsType } from "../../../types/componentTypes";

const ThreeCards = ({ image, title, text, bgColor }: ThreeCardsPropsType) => {
  return (
    <section
      className={`lg:w-[370px] xl:h-[150px] w-full h-[120px] rounded-[10px] flex items-center gap-[20px] px-4`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative md:w-[100px] md:h-[100px] h-[70px] w-[70px] flex-shrink-0">
        <Image
          src={image}
          alt="menu-image"
          layout="intrinsic"
          width={100}
          height={100}
          className="rounded discountImage"
        />
      </div>
      <div className="flex flex-col justify-center ">
        <h3 className="text-white text-[18px] xl:text-[23px] font-bold uppercase font-roboto ">
          {title}
        </h3>
        <p className="text-white text-[12px] xl:text-sm">{text}</p>
        <button className="py-2 px-4 rounded flex justify-start text-black font-roboto relative left-[-15px] text-[12px] md:text-[14px]">
          Buy Online
        </button>
      </div>
    </section>
  );
};

export default ThreeCards;
