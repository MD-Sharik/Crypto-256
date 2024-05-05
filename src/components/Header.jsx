import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex gap-5 w-full px-20 fixed z-50 justify-between backdrop-blur-sm items-center max-w-full text-white max-md:flex-wrap">
      <img src="public\256 Crypto\LOGO.svg" />
      <div className="hidden md:flex gap-5 max-md:flex-wrap">
        <div className="hover:text-violet-500 cursor-pointer">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="hover:text-violet-500 cursor-pointer">
          <Link to={"/token"}>Tokens</Link>
        </div>
        <div className="hover:text-violet-500 cursor-pointer">
          <Link to={"/pricing"}>Pricing</Link>
        </div>
        <div className="hover:text-violet-500 cursor-pointer">Contact Us</div>
      </div>
      <Link to={"/signup"}>
        <button className="hidden md:flex justify-center  px-8 py-4 mt-9 bg-black border border-white border-solid transition-all hover:border-violet-800 hover:text-violet-500 cursor-pointer rounded-[30px] max-md:px-5">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Header;
