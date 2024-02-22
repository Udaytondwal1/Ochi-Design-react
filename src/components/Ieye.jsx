import React, { useState } from "react";

const Ieye = () => {
  const [rotate, setRotate] = useState(0);
  const [rotate2, setRotate2] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let X = e.clientX;
      let Y = e.clientY;

      let deltaX = X - window.innerWidth / 2;
      let deltaY = Y - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      let deltaX2 = X - window.innerWidth / 2;
      let deltaY2 = Y - window.innerHeight / 2;

      var angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
      setRotate2(angle2 - 180);
    });
  });
  return (
    <div
      //   data-scroll
      //   data-scroll-speed="-.7"
      className="relative w-[35vw] p-2 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-16"
    >
      <div className="relative p-8 flex items-center justify-center w-[15vw] h-[32vh] bg-white rounded-full overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white z-30">
          PLAY
        </span>
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
          className="relative top-20 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-36 "
        >
          <div className="relative w-36 h-full rounded-full bg-zinc-900 text-center text-white">
            <div
              // style={{
              //   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              // }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 p-1"
            >
              <div className="w-8 h-8 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-8 flex items-center justify-center w-[15vw] h-[32vh] bg-white rounded-full overflow-hidden ">
        <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white z-30">
          PLAY
        </span>
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${rotate2}deg)`,
          }}
          className="relative top-20 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-36 "
        >
          <div className="relative w-36 h-full rounded-full bg-zinc-900 text-center text-white">
            <div
              // style={{
              //   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              // }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 p-1"
            >
              <div className="w-8 h-8 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ieye;
