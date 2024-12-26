"use client";
import React, { useState } from "react";
import { NextArrowsProps } from "../../../types/componentTypes";
import { GoArrowRight } from "react-icons/go";

const NextArrow = ({ onClick }: NextArrowsProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsActive(true)} 
      onMouseLeave={() => setIsActive(false)} 
      className={`w-[46px] h-[46px] rounded-full ${
        isActive ? "bg-btnBackground" : "card-bg"
      } flex items-center justify-center cursor-pointer absolute top-[-77px] left-[1020px] transition-colors duration-300`}
    >
      <GoArrowRight className="h-[24px] w-[24px] text-white" />
    </div>
  );
};

export default NextArrow;