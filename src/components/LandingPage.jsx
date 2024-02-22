import { easeIn, easeInOut, easeOut, motion, transform } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen border-y-orange-100 pt-1 selection:bg-black selection:text-white"
    >
      <div className="textstructure mt-32 px-14">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ delay: 1 }}
                    className="origin-left w-[8vw] rounded-md ml-2 mr-2 h-[5vw] overflow-hidden "
                  >
                    <img
                      className="bg-cover object-cover origin-left h-28"
                      src="https://cdn.pixabay.com/photo/2016/02/18/19/25/pc-1207886_1280.jpg"
                      alt="image"
                    ></img>
                  </motion.div>
                )}
                <h1 className="flex items-center h-full uppercase text-[7vw] font-['Founders_Grotesk_X-Condensed'] font-semibold leading-[6vw] tracking-tighter text-[#212121]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-400 font-['Neue_Montreal'] mt-28 flex justify-between py-5 px-12">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p className="text-md tracking-tight">{item}</p>;
        })}
        <div className="group flex items-center gap-1">
          <div className="border-[1.5px] border-zinc-800 rounded-full py-1 px-4 font-normal text-md text-center uppercase tracking-tight group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
            start the project
          </div>
          <div className="relative">
            <div className="w-9 h-9 flex items-center justify-center border-[1px] border-zinc-800 rounded-full group-hover:text-white transition-all duration-500">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
            <div className="absolute w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-full transition-all duration-500 top-[1px] -z-10 scale-0 group-hover:scale-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
