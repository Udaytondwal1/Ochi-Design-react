import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".05" className="w-full py-20 h-[80vh] bg-[#004d43] rounded-t-2xl pt-24 pb-10 overflow-hidden">
      <div className="border-t-2 border-b-2 border-zinc-400 flex gap-5 whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{repeat: Infinity,ease: "linear", duration: "10"}}
          className="text-white text-[25vw] font-bold uppercase leading-none tracking-[-1.8vw] mt-[-4.5vw] pr-20"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{repeat: Infinity,ease: "linear", duration: "10"}}
          className="text-white text-[25vw] font-bold uppercase leading-none tracking-[-1.8vw] mt-[-4.5vw] pr-20"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
