import { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Price from "./components/Price";
import Member from "./components/Member";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-black pb-10">
      {/* BLOCK 1 */}
      <div id="d1">
        {/* CONTENT */}
        <div className="flex flex-col  items-center relative self-stretch w-full max-md:max-w-full">
          <div className="flex gap-5 items-start px-5 mt-24 max-w-full text-8xl font-semibold text-center text-white leading-[117px] w-[1237px] max-md:flex-wrap max-md:mt-10 max-md:text-4xl max-md:leading-[58px]">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex-auto mt-5 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]"
            >
              Trusted platform
              <br />
              for crypto investments
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex gap-5 items-start px-5 mt-7 max-w-full text-lg leading-7 text-center text-white w-[1284px] max-md:flex-wrap"
          >
            <div className="flex-auto self-end mt-6 max-md:max-w-full">
              Explore the crypto world, buy and sell crypto coints easily,
              <br />
              trusted Crypto 128 to be your crypto market partner.
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex gap-5  m-auto justify-between items-start mt-16 max-w-full max-md:flex-wrap max-md:mt-10"
          >
            <div className="flex gap-5 justify-between mt-1">
              <div className="justify-center px-10 py-6 text-base leading-4 text-black bg-violet-300 border border-violet-700 border-solid rounded-[30px] max-md:px-5">
                Get Started
              </div>
              <div className="flex gap-4 text-lg leading-7 text-white">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aef9ec0843a7aa36857b1076a205f934871d3cc3922d2b3dc7ac02f32a1b655?"
                  className="shrink-0 w-14 aspect-square"
                />
                <div className="my-auto">How It Works</div>
              </div>
            </div>
          </div>
          <img
            width={756}
            src="public\256 Crypto\HERO.png"
            className="mt-20 max-md:mt-10 w-[80vw] md:w-[48rem]"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-offset="-500"
          />
          <div className="logos flex justify-start w-full">
            <div className="logo_items flex">
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
            </div>
            <div className="logo_items flex">
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
            </div>
            <div className="logo_items flex">
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
              <img src="https://navneetdwivedi.github.io/Logo_Slider/logo.png" />
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 2 */}
      <div className="flex justify-center items-center self-stretch px-16 pt-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col  max-w-full  mt-28 w-[1170px]">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ">
                <div
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-bottom"
                  className="flex flex-col self-stretch my-auto font-semibold text-violet-700 max-md:mt-10 max-md:max-w-full"
                >
                  <div className="text-xl leading-6 max-md:max-w-full">
                    OUR FEATURE
                  </div>
                  <div className="mt-8 text-5xl text-white leading-[53px] max-md:max-w-full">
                    Viewing long-term and
                    <br />
                    short-term forecast
                  </div>
                  <div className="mt-11 text-lg leading-7 text-white max-md:mt-10 max-md:max-w-full">
                    Add funds to your cryptocurrency account to
                    <br />
                    start trading cryptocurrencies. You can add funds
                    <br />
                    using different payment methods.
                  </div>
                  <div className="justify-center self-start px-10 py-6 mt-7 text-base leading-4 bg-black border border-violet-700 border-solid rounded-[30px] max-md:px-5">
                    Get Started
                  </div>
                </div>
              </div>
              <div
                className="md:w-[30vw]"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <img
                  loading="lazy"
                  height={250}
                  src="/256 Crypto/Img2.png"
                  className="w-full max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-44 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full p-20"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-offset="-200"
              >
                <img
                  loading="lazy"
                  height={250}
                  src="/256 Crypto/Img3.png"
                  className="w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
              >
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl font-semibold text-white leading-[52.8px] max-md:max-w-full">
                    More than you think
                  </div>
                  <div className="mt-6 text-lg leading-7 text-white max-md:max-w-full">
                    Add funds to your cryptocurrency account to
                    <br />
                    start trading cryptocurrencies. You can add funds
                    <br />
                    using different payment methods.
                  </div>
                  <div className="mt-10 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10">
                          <div className="flex gap-2.5 text-lg font-semibold leading-5 text-violet-700 whitespace-nowrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0351264e72bd6d6b34f4ea1fcc8bf10aad7afb4e8f78a1c142ab233c515ce375?"
                              className="shrink-0 w-8 aspect-square"
                            />
                            <div className="flex-auto my-auto">
                              Productivity
                            </div>
                          </div>
                          <div className="mt-5 text-base leading-6 text-neutral-400">
                            Dramatically reintermediate
                            <br />
                            effective applications after high-
                            <br />
                            payoff core competencies.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10">
                          <div className="flex gap-2.5 text-lg font-semibold leading-5 text-violet-700 whitespace-nowrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffc0572bf53242965f918d4495939c08077e039ca1220d1df2ced069661e9415?"
                              className=""
                            />
                            <div className="flex-auto my-auto">Synchronize</div>
                          </div>
                          <div className="mt-5 text-base leading-6 text-neutral-400">
                            Dramatically reintermediate
                            <br />
                            effective applications after high-
                            <br />
                            payoff core competencies.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BLOCK 3 */}
      <div className="flex justify-center items-center self-stretch px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-6 mb-5 max-w-full w-[1170px]">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="text-xl font-semibold leading-6 text-center text-violet-700"
          >
            OUR MEMBERS
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="mt-8 text-5xl font-semibold text-center text-white leading-[53px]"
          >
            Get to know
            <br />
            amazing people
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="mt-9 text-lg leading-7 text-center text-white max-md:max-w-full"
          >
            Our mission is to be the global standard for modern crypto issuing,
            <br />
            empowering builders to bring the most innovative products to the
            world.
          </div>
          <Member />
          <Member />
        </div>
      </div>
      <div className="mt-24 w-[80vw] lg:w-[60vw] m-auto  max-md:mt-10 mb-48 ">
        <div className="flex   w-full flex-col-reverse md:flex-row max-md:gap-0">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="200"
            className="flex text-center md:text-left flex-col max-md:ml-0 max-md:w-full"
          >
            <div className="flex flex-col px-5 mt-5 text-white max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl md:text-5xl font-semibold leading-[53px] max-md:max-w-full">
                Completely leverage
                <br />
                other products
              </div>
              <div className="mt-7 text-lg leading-7 max-md:max-w-full">
                Dramatically reintermediate effective applications
                <br />
                after high-payoff core competence.Authoritatively
                <br />
                optimize collaborative benefits
              </div>
              <button className="justify-center self-start px-10 m-auto md:ml-0 py-6 mt-9 text-base leading-4 text-violet-700 bg-black border border-violet-700 border-solid rounded-[30px] max-md:px-5">
                Get Started
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="200"
            className=" m-auto max-md:mt-10 max-md:max-w-full"
          >
            <img loading="lazy" src="/256 Crypto/Img4.png" />
          </div>
        </div>
      </div>
      {/* Price */}
      <div className=" p-14 w-full flex gap-10 justify-center">
        <Price price={"FREE"} />
        <Price price={"$20.00"} />
        <Price price={"$50.00"} />
      </div>
    </div>
  );
}

export default App;
