import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full bg-black text-white px-7 py-2 fixed top-0 z-20">
      <div className="flex xl:justify-between justify-center xl:flex-row flex-col items-center">
        <p className="flex text-[14px] opacity-70">
          <MdCall className="mr-2 mt-1 text-btnBackground" /> +1235 2355 98
        </p>
        <p className="flex text-[14px] opacity-70">
          <BsFillSendFill className="mr-2 mt-1 text-btnBackground" /> youremail@email.com
        </p>
        <p className="text-[14px] opacity-70">
          <span className="text-btnBackground">Open hours</span>: Monday - Sunday 8:00AM - 9:00PM
        </p>
      </div>
    </header>
  );
};

export default Header;
