import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Tok from "./components/Tok";

function Token() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="bg-black  ">
        <div id="d1" className="min-h-screen pt-40">
          <div className="flex flex-col items-center gap-3">
            <h2
              className="text-5xl md:text-8xl font-bold text-white text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Tokens
            </h2>
            <p
              className="text-center text-white font-medium text-sm md:text-xl max-w-[50ch]"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              Crypto tokens are a type of cryptocurrency that represents an
              asset or specific use and reside on their own blockchain.
            </p>
          </div>

          <div className="flex justify-center  h-full">
            <div>
              <div className="flex justify-center py-14">
                <Tok />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token;
