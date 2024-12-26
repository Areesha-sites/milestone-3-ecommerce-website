"use client";
import React from "react";
import { menuData } from "../../../api/route";
import PopularCard from "./PopularCard";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CardsSlider = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow onClick={() => {}}/>,
    prevArrow: <PrevArrow onClick={() => {}}/>,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1000,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 650,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="mt-8">
      <Slider {...settings}>
        {menuData.map((item, index) => (
          <div key={index} className="px-2">
            <PopularCard
              id={item.id}
              image={item.image}
              name={item.name}
              des={item.des}
              des1={item.des1}
              des2={item.des2}
              price={item.price}
              discount={item.discount}
              stock={item.stock}
              reviews={item.reviews}
              benefits1={item.benefits1}
              benefits2={item.benefits2}
              benefits3={item.benefits3}
              benefits4={item.benefits4}
              benefits5={item.benefits5}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardsSlider;
