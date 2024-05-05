import React from "react";
import { Link } from "react-router-dom";

function Token() {
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center px-16 py-10 w-full bg-black max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-24 mb-10 max-w-full w-[1200px] max-md:mt-10">
            <div className="flex justify-center items-center px-16 py-3 text-center text-white max-w-[1200px] max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[634px]">
                <div className="self-center text-8xl font-semibold leading-[117px] max-md:text-4xl">
                  Tokens
                </div>
                <div className="mt-5 text-lg leading-7 max-md:max-w-full">
                  Crypto tokens are a type of cryptocurrency that represents an
                  asset or
                  <br />
                  specific use and reside on their own blockchain.
                </div>
              </div>
            </div>
            <div className="justify-center pt-10 pb-px mt-20 border-b border-violet-600 border-solid max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                  <div className="self-stretch text-lg font-semibold leading-5 text-violet-600 uppercase max-md:mt-10">
                    Name
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                  <div className="self-stretch text-lg font-semibold leading-5 text-violet-600 uppercase max-md:mt-10 max-md:max-w-full">
                    Description
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                  <div className="self-stretch text-lg font-semibold leading-5 text-violet-600 uppercase max-md:mt-10">
                    market cap
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="self-stretch text-lg font-semibold leading-5 text-violet-600 uppercase max-md:mt-10">
                    volume
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center py-px border-b border-violet-600 border-solid max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-2.5 self-stretch py-12 text-xl font-semibold leading-6 text-white whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fd797a70e39f87fb97441c1d562eeeeb0f0249dc7582737ea854ebb713ec94b?apiKey=81c0aed9c49b49998fbd67c65faaf8ac&"
                            className="shrink-0 aspect-square w-[46px]"
                          />
                          <div className="my-auto">Bitcoin</div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                        <div className="self-stretch my-auto text-base leading-6 text-neutral-400 max-md:mt-10">
                          Bitcoin is an innovative payment system and a<br />
                          new kind of money.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 justify-between self-stretch my-auto text-base font-semibold leading-6 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div>$ 233,544,092,111 USD</div>
                    <div>$ 27,556,341,001 USD</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center pt-5 pb-px border-b border-violet-600 border-solid max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-2.5 self-stretch py-16 text-xl font-semibold leading-6 text-white whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea39d839d3101471608f684ceb20243ca57912fc0cedf6e921fbbdfc6a53f12d?apiKey=81c0aed9c49b49998fbd67c65faaf8ac&"
                            className="shrink-0 aspect-square w-[46px]"
                          />
                          <div className="my-auto">Ethereum</div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                        <div className="self-stretch my-auto text-base leading-6 text-neutral-400 max-md:mt-10">
                          Ethereum is the community-run technology
                          <br />
                          powering the cryptocurrency ether (ETH) and
                          <br />
                          thousands of decentralized applications.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 justify-between self-stretch my-auto text-base font-semibold leading-6 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div>$ 78,145,725,085 USD</div>
                    <div>$ 2,123,854,075USD</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center py-px border-b border-violet-600 border-solid max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-2.5 self-stretch py-12 text-xl font-semibold leading-6 text-white whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f81d9991ef5c10c3f08ab4b3a4fe357c307fa846282afe54292b7edc35199d4d?apiKey=81c0aed9c49b49998fbd67c65faaf8ac&"
                            className="shrink-0 aspect-square w-[46px]"
                          />
                          <div className="my-auto">Tether</div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                        <div className="self-stretch my-auto text-base leading-6 text-neutral-400 max-md:mt-9">
                          Tether tokens are assets that move across the
                          <br />
                          blockchain just as easily as other digital
                          <br />
                          currencies.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 justify-between self-stretch my-auto text-base font-semibold leading-6 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div>$ 72,492,161,421 USD</div>
                    <div>$ 51,116,487,015 USD</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center py-px border-b border-violet-600 border-solid max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-2.5 self-stretch py-16 text-xl font-semibold leading-6 text-white whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8f5f9297b3cd00ed99e87b54e54d4fe7aa8bfa48bf3019fb3632bf36854390a?apiKey=81c0aed9c49b49998fbd67c65faaf8ac&"
                            className="shrink-0 aspect-square w-[46px]"
                          />
                          <div className="my-auto">Polkadot</div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                        <div className="self-stretch my-auto text-base leading-6 text-neutral-400 max-md:mt-10">
                          Parachain-to-parachain communication is now
                          <br />
                          enabled with XCM. Polkadot's vision of cross-
                          <br />
                          chain interoperability starts here.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 justify-between self-stretch my-auto text-base font-semibold leading-6 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div>$ 10,077,446,351 USD</div>
                    <div>$ 681,300,745 USD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token;
