"use client"
import React from "react";
// import Slider from "react-slick";
import Slider from "./Slider";
const PopularFoodSection = () => {
  return (
    <section className="w-full px-24 bg-black pb-16 text-white ">
      <p className="text-[17px] text-left text-btnBackground font-normal font-greatVibes">
        Crispy, Every Bite Taste
      </p>
      <h1 className="text-[35px] text-white font-bold font-roboto uppercase">
        Popular Food Items
      </h1>
     
        <Slider />
   
    </section>
  );
};

export default PopularFoodSection;
