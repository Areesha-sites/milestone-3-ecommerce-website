import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const AboutMarquee = () => {
  return (
    <>
      <div className="w-full xl:py-10 py-10 mt-16 rounded-tl-3xl rounded-tr-3xl text-white flex items-center justify-center 2xl:py-14">
        <div className="w-full border-t-[2px] border-b-[2px] border-neutral-200 tracking-wider ">
          <Marquee speed={150}>
            <span
              className=" xl:text-[100px] 2xl:text-[160px] text-[80px] md:text-[90px] font-extrabold tracking-wider flex items-center gap-[10px]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                marginRight: "40px",
              }}
            >
              {" "}
            <h1>  deliciousfood </h1>
            <Image src="/burger.png" alt="" height={100} width={100} className="w-[50px] h-[50px]"/>
            <h1>populerdishes</h1>
            </span>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default AboutMarquee;
