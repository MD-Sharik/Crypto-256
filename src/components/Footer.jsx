import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex flex-col self-stretch py-px w-full bg-black border-t-2 border-violet-700 border-solid max-md:max-w-full">
        <div className="flex gap-5 justify-between self-center mb-10 max-w-full text-lg font-bold text-white w-[801px] max-md:flex-wrap">
          <div className="flex  m-auto flex-col text-sm text-violet-700">
            <div className="mt-14 leading-6 max-md:mt-10 w-[16ch] md:w-[32ch]">
              NEVER MISS ANY UPDATED ABOUT US BY SUBSCRIBING TO OUR NEWSLETTER
            </div>
            <div className="flex gap-0 justify-center py-px mt-10 whitespace-nowrap border-b border-solid border-neutral-400 text-neutral-400">
              <div className="grow justify-center py-3.5 bg-black border border-black border-solid w-fit">
                EMAIL
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47aaa6fc1960d9e3adb36e70b43f1da1e17a0a49b1152bc473e275a30290b2a7?"
                className="shrink-0 aspect-[2.04] w-[77px]"
              />
            </div>
          </div>

          <div className="flex m-auto flex-col  gap-4 mt-14">
            <Link to="/">
              <div className=" text-violet-600 cursor-pointer">Home</div>
            </Link>
            <Link to="/token">
              <div className=" text-violet-600 cursor-pointer">Token</div>
            </Link>
            <Link to="/pricing">
              <div className=" text-violet-600 cursor-pointer">Pricing</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
