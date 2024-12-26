"use client";
// import React from 'react';
// import Slider from 'react-slick';
// import MenuCard from './menuComponents/MenuCard';
// import { menuData } from '../../../api/route';

// const PopularItemSlider = () => {
//   const settings = {
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Display 3 cards initially
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 650,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className=" overflow-hidden grid grid-cols-2">
//       <Slider {...settings}>
//         {menuData.map((el, index) => (
//           <MenuCard
//             key={index}
//             id={el.id}
//             name={el.name}
//             image={el.image}
//             des={el.des}
//             price={el.price}
//             discount={el.discount}
//             stock={el.stock}
//             reviews={el.reviews}
//             des1={el.des1}
//             des2={el.des2}
//             benefits1={el.benefits1}
//             benefits2={el.benefits2}
//             benefits3={el.benefits3}
//             benefits4={el.benefits4}
//             benefits5={el.benefits5}
//           />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default PopularItemSlider;
import Slider from "react-slick";
import MenuCard from "./menuComponents/MenuCard";
import { menuData } from "../../../api/route";
function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container text-white grid grid-cols-4">
      <Slider {...settings}>
        {menuData.map((el, index) => (
          <MenuCard
            key={index}
            id={el.id}
            name={el.name}
            image={el.image}
            des={el.des}
            price={el.price}
            discount={el.discount}
            stock={el.stock}
            reviews={el.reviews}
            des1={el.des1}
            des2={el.des2}
            benefits1={el.benefits1}
            benefits2={el.benefits2}
            benefits3={el.benefits3}
            benefits4={el.benefits4}
            benefits5={el.benefits5}
          />
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
