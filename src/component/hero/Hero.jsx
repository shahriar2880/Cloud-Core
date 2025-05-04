import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pb-1 px-4 sm:px-6 lg:px-8"
    >
      {/* left column */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* start badge */}

        <div className="mt-25">
          <div className="star flex items-center gap-2 bg-gray-100 w-fit px-4 py-2 rounded-full hover:bg-gray-200 transition-colors coursor-pointer group">
            <span className="text-blue-600 group-hover:text-amber-400 group-hover:scale-110 transition-transform">
              ★★★★★
            </span>
            <span className="text-sm font-medium">Jump start your growth</span>
          </div>
        </div>

        {/* heading */}

        <div>
          <h1 className="typewriter-text text-2xl md:text-2xl lg:text-3xl font-bold leading-tight">
            Discover Premium Products for Your Everyday Life
            <span className="text-blue-600 inline-block">
              Shop hand-picked collections loved by thousands.
            </span>
            <span className=" bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
            🔥 Flash Sale Ends in 03:12:48 Up to 50% off selected items!
            <span className="inline-block ml-2 animate-pulse">⏰</span>
          </h1>
        </div>

        {/* paragraph */}

        <div>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl">
            Get the most accurate leads, sales people training and conversions,
            tools and more — all within the same one billing.
          </p>
        </div>

        <div className="flex gap-3 max-w-md">
          
          <Link to="/products" className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
            Shop Now
          </Link>
        </div>
      </div>

      {/* right column */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 pl-0 md:pl-4">
        <div className="">
          <img
            src="https://iili.io/2ysFUen.png"
            alt="Team meeting"
            className="rounded-lg z-10 hover:scale-[1.02] transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
