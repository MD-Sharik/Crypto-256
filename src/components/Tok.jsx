import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function tok() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className=" overflow-y-hidden rounded-xl shadow-xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <table className="max-w-full text-sm text-left text-white ">
          <thead className="text-xs uppercase transparent bg-white/45 ">
            <tr data-aos="fade-up" data-aos-delay="450">
              <th
                scope="col"
                className="px-6 text-violet-950 text-sm md:text-xl font-black  py-3"
              >
                NAME
              </th>
              <th
                scope="col"
                className="px-6  text-violet-950 hidden md:block md:text-xl font-black py-3"
              >
                DESCRIPTION
              </th>
              <th
                scope="col"
                className="px-6  text-violet-950 text-sm md:text-xl font-black py-3"
              >
                MARKET CAP
              </th>
              <th
                scope="col"
                className="px-6  text-violet-950 hidden md:block md:text-xl font-black py-3"
              >
                VOLUME
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="transparent bg-white/20 border-b "
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <th
                scope="row"
                className="px-6 py-4  text-white  whitespace-nowrap "
              >
                Bitcoin
              </th>
              <td className="px-6 py-4 max-w-[50ch] hidden md:block text-violet-300 font-semibold">
                Bitcoin is an innovative payment system and a new kind of money.
              </td>
              <td className="px-6 py-4 font-bold">$ 233,544,092,111 USD</td>
              <td className="px-6 py-4 font-bold hidden md:flex md:mt-4 ">
                $ 27,556,341,001 USD
              </td>
            </tr>
            <tr
              className="transparent bg-white/20 border-b "
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <th scope="row" className="px-6 py-4   whitespace-nowrap ">
                Ethereum
              </th>
              <td className="px-6 max-w-[50ch] text-violet-300  hidden md:block font-medium py-4">
                Ethereum is the community-run technology powering the
                cryptocurrency ether (ETH) and thousands of decentralized
                applications.
              </td>
              <td className="px-6 py-4 font-bold ">$ 78,145,725,085 USD</td>
              <td className="px-6 py-4 font-bold hidden md:mt-10 md:block">
                $ 2,123,854,075USD
              </td>
            </tr>
            <tr
              className="transparent bg-white/20 border-b"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                Tether
              </th>
              <td className="px-6 max-w-[50ch] hidden md:block text-violet-300 font-medium py-4">
                Tether tokens are assets that move across the blockchain just as
                easily as other digital currencies.
              </td>
              <td className="px-6 py-4  font-bold">$ 72,492,161,421 USD</td>
              <td className="px-6 py-4  font-bold hidden md:mt-4 md:block">
                $ 51,116,487,015 USD
              </td>
            </tr>
            <tr
              className="transparent bg-white/20"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                Polkadot
              </th>
              <td className="px-6 max-w-[50ch] hidden md:block text-violet-300 font-medium py-4">
                Parachain-to-parachain communication is now enabled with XCM.
                Polkadot's vision of cross-chain interoperability starts here.
              </td>
              <td className="px-6 py-4  font-bold">$ 10,077,446,351 USD</td>
              <td className="px-6 py-4  font-bold hidden md:mt-10 md:block">
                $ 681,300,745 USD
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default tok;
