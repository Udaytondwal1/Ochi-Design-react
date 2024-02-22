import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.2.5" className='w-full py-20 rounded-t-3xl p-20 bg-[#cdea68] text-left font-["Neue_Montreal"] overflow-hidden'>
      <h1 className='font-["Neue_Montreal"] font-medium text-[3.5vw] leading-[8vh] tracking-tight mr-40'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to <span className="relative after:absolute after:content[''] after:w-full after:h-[2px] after:bg-black after:scale-x-100 after:top-16 after:right-[1px] after:duration-300 after:transition-transform ease-in-out duration-1000 after:origin-right  after:hover:origin-left  after:hover:scale-x-0">raise funds</span>, <span className="relative after:absolute after:content[''] after:w-full after:h-[2px] after:bg-black after:scale-x-100 after:top-16 after:right-[1px] after:duration-300 after:transition-transform ease-in-out duration-1000 after:origin-right  after:hover:origin-left  after:hover:scale-x-0">sell products</span>, <span className="relative after:absolute after:content[''] after:w-full after:h-[2px] after:bg-black after:scale-x-100 after:top-16 after:right-[1px] after:duration-300 after:transition-transform ease-in-out duration-1000 after:origin-right  after:hover:origin-left  after:hover:scale-x-0">explain complex ideas</span>, and <span className="relative after:absolute after:content[''] after:w-full after:h-[2px] after:bg-black after:scale-x-100 after:top-16 after:right-[1px] after:duration-300 after:transition-transform ease-in-out duration-1000 after:origin-right  after:hover:origin-left  after:hover:scale-x-0">hire great
        people.</span>
      </h1>
      <div className="w-[100vw] h-[1px] bg-zinc-600 -ml-20 mt-20"></div>
      <div className="textcontainer">
        <div>What you can expect:</div>
        <div><p>
We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
<p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p></div>
        <div>S:

Instagram
Behance
Facebook
Linkedin</div>
      </div>
      <div className="w-[100vw] h-[1px] bg-zinc-600 -ml-20 mt-20"></div>
      <div className="w-full flex gap-5 mt-14">
        <div className="w-1/2 mt-5">
          <h1 className="text-6xl">Our approch:</h1>
          <button className="bg-slate-950 text-white px-8 py-5 mt-5 rounded-full flex gap-10 items-center uppercase">
            Read More
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-cover overflow-hidden mt-5 rounded-2xl"><img className="w-full h-full" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
        </div>
    </div>
  );
};

export default About;
