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
            <img src="/256 Crypto/LOGO.svg" alt="logo" width="60" height="60" />
          </div>
          <div className="text-white">Dashboard</div>
          <div>
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
          className={`flex gap-5 w-full px-20 fixed z-50 justify-between backdrop-blur-sm items-center max-w-full text-white max-md:flex-wrap ${
            scrolled ? "bg-black" : ""
          }`}
          style={{
            transition: "background-color 0.3s ease",
          }}
        >
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
            <div className="hover:text-violet-500 cursor-pointer">
              Contact Us
            </div>
          </div>
          <Link to={"/signup"}>
            <button className="hidden md:flex justify-center px-8 py-4 bg-black border border-white border-solid transition-all hover:border-violet-800 hover:text-violet-500 cursor-pointer rounded-[30px] max-md:px-5">
              Get Started
            </button>
          </Link>
        </div>
      );
    }
  };

  return renderHeader();
}

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <div className="flex gap-5 w-full px-20 fixed z-50 justify-between backdrop-blur-sm items-center max-w-full text-white max-md:flex-wrap">
//       <img src="public\256 Crypto\LOGO.svg" />
//       <div className="hidden md:flex gap-5 max-md:flex-wrap">
//         <div className="hover:text-violet-500 cursor-pointer">
//           <Link to={"/"}>Home</Link>
//         </div>
//         <div className="hover:text-violet-500 cursor-pointer">
//           <Link to={"/token"}>Tokens</Link>
//         </div>
//         <div className="hover:text-violet-500 cursor-pointer">
//           <Link to={"/pricing"}>Pricing</Link>
//         </div>
//         <div className="hover:text-violet-500 cursor-pointer">Contact Us</div>
//       </div>
//       <Link to={"/signup"}>
//         <button className="hidden md:flex justify-center  px-8 py-4 mt-9 bg-black border border-white border-solid transition-all hover:border-violet-800 hover:text-violet-500 cursor-pointer rounded-[30px] max-md:px-5">
//           Get Started
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default Header;
