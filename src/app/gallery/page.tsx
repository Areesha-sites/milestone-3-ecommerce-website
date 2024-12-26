import React from "react";
import Image from "next/image";
import TestimonialCards from "../Components/TestimonialCards";
const Gallery = () => {
  return (
    <>
      <section className="bg-black w-full h-auto py-44 md:pt-52 lg:pt-48 pt-40 md:px-14 px-5 text-white">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center">
            A Feast for Your Eyes, A Treat for Your Soul.
          </span>
          <h1 className="uppercase xl:text-[48px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center">
            Explore Our <span className="text-btnBackground">Culinary</span>{" "}
            Journey
          </h1>
          <div className="border-b-[4px] w-[100px] border-btnBackground"></div>
          <p className="text-white/70 text-[12px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full ">
            Delight in a visual feast of our signature dishes, catered events,
            and behind-the-scenes moments. Discover the passion, creativity, and
            expertise that make Chow Champs a standout in the culinary world.
          </p>
        </div>
        <div className="relative top-[80px] xl:px-7 xl:left-[-30px] h-auto w-full mx-auto md:max-w-[700px] max-w-[280px]">
          <Image
            src="/gallery_01.jpg"
            alt=""
            height={500}
            width={500}
            className="xl:h-[400px] xl:w-[700px] md:h-[300px] md:w-[335px] w-[85px] h-[85px] rounded-[5px] shadow-md shadow-stone-700 object-cover xl:relative md:left-[-200px]"
          />
          <Image
            src="/gallery_02.jpg"
            alt=""
            height={500}
            width={500}
            className="xl:h-[400px] object-cover xl:w-[450px] md:h-[300px] md:w-[300px] w-[85px] h-[85px] rounded-[5px] shadow-md shadow-stone-700 absolute top-0 xl:left-[482px] md:left-[345px] left-[95px]"
          />
          <Image
            src="/gallery_03.jpg"
            alt=""
            height={500}
            width={500}
            className="xl:h-[400px] object-cover xl:w-[400px] md:h-[200px] md:w-[210px] w-[85px] h-[85px] rounded-[5px] shadow-md shadow-stone-700 relative md:top-[15px] top-[-84px] left-[190px] xl:left-[-197px] md:left-0"
          />
          <Image
            src="/gallery_04.jpg"
            alt=""
            height={500}
            width={500}
            className="xl:h-[400px] object-cover xl:w-[345px] md:h-[200px] md:w-[210px] w-[85px] h-[85px] rounded-[5px] shadow-md shadow-stone-700 absolute xl:left-[241px] md:left-[217px] xl:top-[415px] md:top-[315px] top-[100px] "
          />
          <Image
            src="/gallery_05.jpg"
            alt=""
            height={500}
            width={500}
            className="xl:h-[400px] object-cover xl:w-[340px] md:h-[200px] md:w-[210px]  w-[85px] h-[85px] rounded-[5px] shadow-md shadow-stone-700 absolute xl:left-[596px] md:left-[435px] left-[95px] xl:top-[415px] md:top-[315px] top-[100px] "
          />
          <Image
            src="/gallery_08.jpg"
            alt=""
            height={500}
            width={500}
            className="xl:h-[400px] object-cover xl:w-[360px] md:h-[200px] md:w-[210px]  w-[85px] h-[85px] rounded-[5px] shadow-md shadow-stone-700 relative md:top-[30px] top-[-70px] left-[189px] xl:left-[-197px] md:left-0 "
          />
          <Image
            src="/gallery_09.jpg"
            alt=""
            height={500}
            width={500}
            className="xl:h-[400px] object-cover xl:w-[360px] md:h-[200px] md:w-[210px] w-[85px] h-[85px] rounded-[5px] shadow-md shadow-stone-700 absolute xl:top-[830px] xl:left-[200px] top-[200px] left-[50px] md:top-[530px] md:left-[217px]"
          />
          <Image
            src="/gallery_10.jpg"
            alt=""
            height={500}
            width={500}
            className="xl:h-[400px] object-cover xl:w-[360px] w-[85px] h-[85px] md:h-[200px] md:w-[210px] rounded-[5px] shadow-md shadow-stone-700 absolute md:top-[530px] xl:top-[830px] top-[200px] xl:left-[570px] md:left-[435px] left-[145px]"
          />
        </div>
        <div className="flex justify-center flex-col items-center xl:gap-y-[30px] gap-[20px] md:gap-[30px] lg:gap-[15px] relative top-[150px] md:top-[200px] md:px-7 px-2">
          <span className="md:text-[14px] text-[12px] mb-[-15px] font-greatVibes text-btnBackground font-normal">
            Building Trust, One Story at a Time.
          </span>
          <h1 className="md:text-[34px] text-[20px] leading-[20px] font-roboto text-white font-bold uppercase mb-[-15px] text-center">
            What Our Customers Say!
          </h1>
          <p className="md:text-[14px] text-[12px] text-white/50 font-roboto font-normal lg:w-[750px] text-center w-full xl:leading-[15px]">
            Discover how our products and services have delighted our customers.
            Real experience, genuine feedback, and inspiring stories shared by
            those who matter the most to us.
          </p>
        </div>
        <div className="">
          <TestimonialCards />
        </div>
      </section>
    </>
  );
};

export default Gallery;
