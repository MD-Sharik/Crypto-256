import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Function to render different headers based on location
  const renderHeader = () => {
    if (location.pathname === "/profile") {
      return (
        <div className="bg-black h-20 flex justify-between items-center px-12 ">
          <div>
            <Link to={"/"}>
              <img
                src="/256 Crypto/LOGO.svg"
                alt="logo"
                width="60"
                height="60"
              />
            </Link>
          </div>
          <div className="text-white">Dashboard</div>
          <div className="flex gap-4 items-center">
            <span className="text-white font-semibold">
              {localStorage.getItem("username").toUpperCase()}
            </span>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/user--v1.png"
              alt="user--v1"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`flex gap-5 w-full fixed z-50 justify-between backdrop-blur-sm items-center max-w-full text-white max-md:flex-wrap ${
            scrolled ? "bg-black/95" : ""
          }`}
          style={{
            transition: "background-color 0.3s ease",
          }}
        >
          <div className="w-48 flex justify-center ">
            <Link to="/">
              <img src="/256 Crypto/LOGO.svg" />
            </Link>
          </div>
          <div className="hidden  md:flex gap-5 max-md:flex-wrap">
            <div className="hover:text-violet-500 cursor-pointer">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="hover:text-violet-500 cursor-pointer">
              <Link to={"/token"}>Tokens</Link>
            </div>
            <div className="hover:text-violet-500 cursor-pointer">
              <Link to={"/pricing"}>Pricing</Link>
            </div>
          </div>
          <div className="flex  w-48">
            <Link to={"/Login"}>
              <button className="hidden md:flex justify-center px-8 py-4 bg-transparent hover:bg-black border border-white border-solid transition-all hover:border-violet-800 hover:text-violet-500 cursor-pointer rounded-[30px] max-md:px-5">
                Login
              </button>
            </Link>
          </div>
        </div>
      );
    }
  };

  return renderHeader();
}

export default Header;
