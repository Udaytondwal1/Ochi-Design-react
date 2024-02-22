import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-16">
        <h1 className="text-6xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-5 mt-10">
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] relative">
            <div className="card w-full h-full rounded-xl bg-green-600 overflow-hidden">
              <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl text-[#cdea68] z-10 leading-none tracking-tighter font-semibold">
              {"FYDE".split("").map((item, index) =><span className="">{item}</span>)}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative rounded-xl w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-xl bg-green-600 overflow-hidden">
            <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl text-[#cdea68] z-10 leading-none tracking-tighter font-semibold">
               {/* {"VISE".split("").map((item, index) =><span className="">{item}</span>)} */}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
