import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex gap-5 items-center justify-center px-12 font-['Neue_Montreal']">
      <div className="cardcontainer w-full h-[58vh]">
        <div className="relative card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 w-28 h-8 rounded-full border-[1px] border-[#cdea68] text-[#cdea68] leading-none tracking-tight font-medium">
            &copy;2019-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer w-full h-[58vh] flex items-center gap-5">
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 w-48 h-8 rounded-full border-2 text-white leading-none tracking-tight font-medium uppercase">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            className="w-24"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-8 bottom-8 w-64 h-8 rounded-full border-2 text-white leading-none tracking-tight font-medium uppercase">
            Bussiness bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
