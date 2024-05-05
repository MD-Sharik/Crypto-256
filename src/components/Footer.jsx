import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col self-stretch py-px w-full bg-black border-t-2 border-violet-700 border-solid max-md:max-w-full">
        <div className="flex gap-5 justify-between self-center mb-10 max-w-full text-lg font-bold text-white w-[801px] max-md:flex-wrap">
          <div className="flex flex-col text-sm text-violet-700">
            <div className="flex gap-5 justify-between items-end text-3xl leading-8 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0e319c5d95252cd12170f89eff475b90705512c71e93e84c4bd022d173ef75d?"
                className="shrink-0 self-stretch aspect-[0.7] w-[70px]"
              />
              <div className="mt-16 text-3xl max-md:mt-10"></div>
              <div className="mt-16 max-md:mt-10"></div>
              <div className="mt-16 max-md:mt-10"></div>
              <div className="mt-20 max-md:mt-10"></div>
            </div>
            <div className="mt-14 leading-6 max-md:mt-10">
              NEVER MISS ANY UPDATED
              <br />
              ABOUT US BY SUBSCRIBING
              <br />
              TO OUR NEWSLETTER
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
          <div className="flex flex-col self-end mt-40 leading-[120%] max-md:mt-10">
            <div>Tokens</div>
            <div className="mt-10">About Us</div>
            <div className="mt-10 text-neutral-400">FAQ</div>
          </div>
          <div className="flex flex-col self-end mt-40 leading-[120%] max-md:mt-10">
            <div>Pricing</div>
            <div className="mt-9">Team</div>
            <div className="mt-10 text-neutral-400">Contact Us</div>
          </div>
          <div className="my-auto leading-[120%]">Careers</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
