import React  from "react";
import Ieye from "./Ieye";

const Eyes = () => {
  return (
    <div className="eyessection relative w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className='relative w-full h-screen bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover'
      >
        <Ieye />
        {/* <div> <Ieye /></div> */}
      </div>
    </div>
  );
};

export default Eyes;
