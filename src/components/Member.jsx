import React from "react";

function Member({ img, img2, img3, nm1, nm2, nm3 }) {
  return (
    <div className="w-[50vw] md:w-[50vw] mt-14 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="0"
          className="flex flex-col w-1/3 max-md:ml-0 max-md:w-full"
        >
          <div className="flex flex-col grow items-center font-semibold leading-[120%] max-md:mt-10">
            <img
              loading="lazy"
              src={img}
              className="self-stretch w-full aspect-square rounded-3xl"
            />
            <div className="mt-6 text-xl text-white">{nm1}</div>
            <div className="mt-3.5 text-lg text-zinc-500">
              CEO of Crypto 128
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          className="flex flex-col ml-5 w-1/3 max-md:ml-0 max-md:w-full"
        >
          <div className="flex flex-col items-center font-semibold leading-[120%] max-md:mt-10">
            <img
              loading="lazy"
              src={img2}
              className="self-stretch w-full aspect-square rounded-3xl"
            />
            <div className="mt-6 text-xl text-white">{nm2}</div>
            <div className="mt-2 text-lg text-zinc-500">Office Director</div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="200"
          className="flex flex-col ml-5 w-1/3 max-md:ml-0 max-md:w-full"
        >
          <div className="flex flex-col grow items-center font-semibold leading-[120%] max-md:mt-10">
            <img
              loading="lazy"
              src={img3}
              className="self-stretch w-full aspect-square rounded-3xl"
            />
            <div className="mt-6 text-xl text-white">{nm3}</div>
            <div className="mt-3.5 text-lg text-zinc-500">Sales Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
