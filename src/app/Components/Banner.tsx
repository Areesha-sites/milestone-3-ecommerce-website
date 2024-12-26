"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { motion } from "framer-motion";
// import './styles.css';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChanged = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          onChange={handleSlideChanged}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full md:h-[100vh] overflow-hidden bg-black md:min-h-screen text-white cursor-pointer relative pt-28 md:pt-0 pb-96 md:pb-0">
              <h1
                className="absolute inset-0 flex justify-center items-center md:flex-row flex-col xl:text-[17rem] lg:text-[13rem] md:text-[10rem] text-[4.5rem] font-extrabold opacity-10 md:mt-14 -mt-56 z-0 font-roboto md:text-left"
              >
                Feliciano
              </h1>
              <div className="flex justify-between items-center md:flex-row flex-col gap-y-[20px] lg:mt-28 md:mt-36 lg:px-20 md:px-9 relative z-10 px-5 text-center md:text-left">
                <div>
                  <Image
                    src="/chilli1.png"
                    alt="fire"
                    height={100}
                    width={100}
                    className="absolute xl:-top-[15%] lg:-top-[7%] left-0 xl:h-[400px] xl:w-[200px] lg:h-[300px] lg:w-[180px] z-10 md:h-[250px] md:w-[150px] md:-top-[20%] top-[-5%] h-[150px] w-[80px]"
                  />
                  <h1 className="font-nunito xl:text-8xl lg:text-[85px] lg:leading-[88px] md:text-[70px] md:leading-[67px] font-extrabold z-20 relative text-[40px] leading-[45px]  md:text-left">
                    Crispy <br /> Chic
                    <span className="text-btnBackground">k</span>en
                  </h1>
                  <h3 className="md:text-[14px] ml-2 xl:w-[50%] lg:w-[70%] md:w-[60%] relative z-20 w-full text-[12px] font-roboto ">
                    Serving up delicious, time-tested recipes for over 18 years.
                    Our commitment to quality and flavor has made us a local
                    favorite.
                  </h3>
                  <button
                    type="button"
                    className="mt-2 ml-2 text-btnBackground hover:text-white border border-btnBackground hover:bg-btnBackground focus:outline-none focus:ring-none font-medium rounded-lg xl:text-sm lg:text-[13px] md:text-[11px] text-[9px] px-5 py-2 text-center me-2 mb-2 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-btnBackground dark:focus:ring-yellow-900"
                  >
                    Read More
                  </button>
                  <Image
                    src="/fire.png"
                    alt="fire"
                    height={100}
                    width={100}
                    className="absolute md:top-[40%] left-0 lg:h-[400px] lg:w-[300px] md:h-[300px] md:w-[220px] z-10 top-[80%] h-[200px] w-[200px]"
                  />
                </div>

                <div className="relative z-10">
                  <Image
                    src="/chilli2.png"
                    alt="green-chilli"
                    height={100}
                    width={100}
                    className="absolute right-[-10%] md:top-[-15%] z-10 md:w-[200px] md:h-[500px] w-[60px] h-[150px] top-[-40%]"
                  />
                  <Image
                    src="/slider1.png"
                    alt="chicken"
                    height={200}
                    width={200}
                    className="xl:h-[70vh] xl:w-[55vw] lg:w-[60vw] lg:h-[66vh] xl:mt-16 lg:mt-12 z-20 relative md:w-[90vw] md:h-[60vh] w-[80vw] h-[45vh] mx-auto left-[20px] sm:w-[75vw] sm:h-[50vh]"
                  />
                  <Image
                    src="/offer.png"
                    alt="offer-image"
                    height={200}
                    width={200}
                    className="absolute xl:-top-14 xl:right-[359px] lg:-top-16 lg:right-56 offer-image lg:h-[300px] lg:w-[300px] z-20 md:-top-24 md:right-48 md:h-[250px] md:w-[250px] h-[150px] w-[150px] -top-20 right-32"
                  />
                  <Image
                    src="/red-chilli.png"
                    alt="red-chilli"
                    height={200}
                    width={200}
                    className="absolute -right-[13%] bottom-0 top-[50%] md:top-[15%] md:h-[500px] md:w-[200px] w-[100px] h-[200px] z-10"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full md:h-[100vh] overflow-hidden bg-black md:min-h-screen text-white cursor-pointer relative py-28 pt-28 pb-56 md:pb-0 md:pt-0">
              <h1 className="absolute inset-0 flex justify-center md:flex-row flex-col items-center xl:text-[17rem] lg:text-[13rem] md:text-[10rem] font-extrabold opacity-10 md:mt-14 -mt-48 text-[4.5rem] z-0 font-roboto">
                Tastiest
              </h1>
              <div className="flex justify-between items-center md:flex-row flex-col gap-y-[20px]  lg:mt-28 lg:px-20 md:mt-32 md:px-9 relative z-10 text-center px-5 md:text-left">
                <div>
                  <Image
                    src="/chilli1.png"
                    alt="fire"
                    height={100}
                    width={100}
                    className="absolute xl:-top-[15%] lg:-top-[7%] left-0 xl:h-[400px] xl:w-[200px] lg:h-[300px] lg:w-[180px] z-10 md:h-[250px] md:w-[150px] md:-top-[20%] top-[-5%] h-[150px] w-[80px]"
                  />
                  <h1 className="font-nunito xl:text-8xl lg:text-[85px] lg:leading-[88px]  font-extrabold z-20 relative md:text-[70px] md:leading-[67px] text-[40px] leading-[45px] ">
                    J<span className="text-btnBackground">u</span>icy <br /> Burger
                  </h1>
                  <h3 className="md:text-[14px] ml-2 xl:w-[50%] lg:w-[70%] md:w-[60%] md:mt-4 w-full text-[12px] font-roboto mt-2">
                    Savor the taste of our freshly grilled, mouthwatering
                    burgers. Made with premium ingredients to give you the
                    ultimate burger experience.
                  </h3>
                  <button
                    type="button"
                    className="mt-2 ml-2 text-btnBackground hover:text-white border border-btnBackground text-[9px] hover:bg-btnBackground focus:outline-none focus:ring-none font-medium rounded-lg xl:text-sm lg:text-[13px] md:text-[11px] px-5 py-2 text-center me-2 mb-2 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-btnBackground dark:focus:ring-yellow-900"
                  >
                    Read More
                  </button>
                  <Image
                    src="/fire.png"
                    alt="fire"
                    height={100}
                    width={100}
                    className="absolute md:top-[40%] left-0 md:h-[400px]md:w-[300px] z-10 md:h-[300px] md:w-[220px] top-[80%] h-[200px] w-[200px]"
                  />
                </div>

                <div className="relative z-10">
                  <Image
                    src="/chilli2.png"
                    alt="green-chilli"
                    height={100}
                    width={100}
                    className="absolute right-[-10%] md:top-[-15%] z-10 md:w-[200px] md:h-[500px]  w-[60px] h-[150px] top-[-27%]"
                  />
                  <Image
                    src="/slider2.png"
                    alt="chicken"
                    height={200}
                    width={200}
                    className="xl:h-[85vh] xl:w-[45vw] lg:h-[75vh] lg:w-[54vw] xl:-mt-11 z-20 relative md:w-[90vw] md:h-[66vh] w-[80vw] h-[65vh] mx-auto "
                  />
                  <Image
                    src="/offer.png"
                    alt="offer-image"
                    height={200}
                    width={200}
                    className="absolute xl:-top-28 xl:right-72 lg:-top-16 lg:right-48 offer-image lg:h-[300px] lg:w-[300px] z-20 md:-top-24 md:right-48 md:h-[250px] md:w-[250px] h-[150px] w-[150px] -top-20 right-32"
                  />
                  <Image
                    src="/red-chilli.png"
                    alt="red-chilli"
                    height={200}
                    width={200}
                    className="absolute -right-[13%] bottom-0 md:top-[15%] md:h-[500px] md:w-[200px] z-10 w-[100px] h-[200px] top-[50%]"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full md:h-[100vh] overflow-hidden bg-black md:min-h-screen text-white cursor-pointer relative py-28 pt-28 pb-64 md:pb-0 md:pt-0">
              <h1 className="absolute inset-0 flex justify-center items-center md:flex-row flex-col xl:text-[17rem] lg:text-[13rem] md:text-[12rem] text-[5rem]  font-extrabold opacity-10 md:mt-14 z-0 font-roboto -mt-48">
                Sizzle
              </h1>
              <div className="flex justify-between md:flex-row flex-col items-center lg:mt-28 gap-y-[20px] md:mt-32 md:px-9 lg:px-20 relative z-10 px-5 text-center md:text-left">
                <div>
                  <Image
                    src="/chilli1.png"
                    alt="fire"
                    height={100}
                    width={100}
                    className="absolute xl:-top-[15%] lg:-top-[7%] left-0 xl:h-[400px] xl:w-[200px] lg:h-[300px] lg:w-[180px] z-10 md:h-[250px] md:w-[150px] md:-top-[20%] top-[-5%] h-[150px] w-[80px]"
                  />
                  <h1 className="font-nunito xl:text-8xl lg:text-[85px] lg:leading-[88px]  font-extrabold z-20 relative md:text-[70px] md:leading-[67px] text-[40px] leading-[45px]">
                    Flavor<span className="text-btnBackground">f</span>ul <br /> Seekh
                  </h1>
                  <h3 className="md:text-[14px] ml-2 xl:w-[50%] lg:w-[70%] relative z-20 md:w-[60%] w-full text-[12px] font-roboto md:mt-2">
                    Experience the rich, smoky taste of our tender, perfectly
                    spiced seekh kababs. Crafted to bring authentic flavors to
                    your table.
                  </h3>
                  <button
                    type="button"
                    className="mt-2 ml-2 text-btnBackground hover:text-white border border-btnBackground hover:bg-btnBackground focus:outline-none focus:ring-none font-medium rounded-lg xl:text-sm lg:text-[13px] md:text-[11px] px-5 py-2 text-center me-2 mb-2 dark:text-yellow-300 text-[9px] dark:hover:text-white dark:hover:bg-btnBackground dark:focus:ring-yellow-900"
                  >
                    Read More
                  </button>
                  <Image
                    src="/fire.png"
                    alt="fire"
                    height={100}
                    width={100}
                    className="absolute md:top-[40%] left-0 lg:h-[400px] lg:w-[300px] z-10 md:h-[300px] md:w-[220px] top-[80%] h-[200px] w-[200px] "
                  />
                </div>

                <div className="relative z-10">
                  <Image
                    src="/chilli2.png"
                    alt="green-chilli"
                    height={100}
                    width={100}
                    className="absolute right-[-10%] md:top-[-15%] z-10 md:w-[200px] md:h-[500px] w-[60px] h-[150px] top-[-35%]"
                  />
                  <Image
                    src="/slider3.png"
                    alt="chicken"
                    height={200}
                    width={200}
                    className="xl:h-[75vh] xl:w-[45vw] lg:h-[70vh] lg:w-[55vw] xl:mt-3 lg:mt-7 z-20 relative md:w-[90vw] md:h-[66vh] w-[75vw] h-[47vh] mx-auto "
                  />
                  <Image
                    src="/offer.png"
                    alt="offer-image"
                    height={200}
                    width={200}
                    className="absolute xl:-top-16 xl:right-80 lg:-top-24 lg:right-48 offer-image lg:h-[300px] lg:w-[300px] z-20 md:-top-24 md:right-44 md:h-[250px] md:w-[250px] h-[150px] w-[150px] -top-20 right-32"
                  />
                  <Image
                    src="/red-chilli.png"
                    alt="red-chilli"
                    height={200}
                    width={200}
                    className="absolute -right-[13%] bottom-0 md:top-[15%] md:h-[500px] md:w-[200px] z-10  w-[100px] h-[200px] top-[80%]"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
