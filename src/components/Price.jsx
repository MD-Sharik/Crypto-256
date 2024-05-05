import React from "react";
import "../components/Price.css";

function Price({ price, use, feat }) {
  return (
    <div>
      <div className="bg-zinc-800 w-[22rem] h-[30rem] rounded-2xl border-solid shadow-sm shadow-violet-500 border-white">
        <div className="h-[30%] bg-zinc-500 rounded-t-2xl bgr flex items-center justify-center">
          <div className=" w-fit text-5xl font-bold text-white">{price}</div>
        </div>
        <div className="h-[70%] bg-gradient-to-b from- to bgo rounded-b-2xl"></div>
      </div>
    </div>
  );
}

export default Price;
