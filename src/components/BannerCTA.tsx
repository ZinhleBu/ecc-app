/** @format */

import React from "react";

export default function BannerCTA() {
  return (
    <>
      <div className="flex flex-col relative justify-center items-start my-9 py-10 px-11 md:py-80 md:px-20  h-[30vh] w-ful gap-4 bg-white">
        <h1 className="text-3xl md:text-6xl font-extrabold text-green-900">
          Smart Power,
          <br /> simple choices
        </h1>
        <p className="text-xs md:text-xl text-gray-400">
          Finding your perfect power solution is straightforward, stress-free,
          and simple with Specialized Solar Systems Africa. Backed by decades of
          expertise, our customised smart solutions are designed to meet your
          unique needs—without the complicated documents and confusing options. 
          <br />
          Looking for a backup power system for your home? A small battery
          solution for your office? A comprehensive commercial energy setup?
          Whatever your requirements, our experts are here to help you make the
          right choice and understand the benefits.
        </p>
        <button
          className=" text-white px-4 py-2 mt-6 w-fit rounded-lg"
          style={{ backgroundColor: "rgba(8, 122, 55, 1)" }}
        >
          See how you benefit
        </button>
      </div>
      <div className="flex flex-col justify-center items-start py-5 px-4 md:py-8 md:px-20 h-fit w-full gap-4 bg-white">
        <div
          className="flex flex-col justify-center items-start py-5 px-7 md:py-20 md:px-20 w-full gap-5 rounded-xl"
          style={{
            backgroundImage: "url('/bg2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
        >
          <h1 className="text-3xl md:text-6xl font-extrabold text-white">
            Power Solutions <br />
            to Empower You
          </h1>
          <p className="text-xs md:text-lg text-white">
            Discover how our advanced battery and energy management systems can
            lower your costs and provide easy access to reliable, uninterrupted power when you need it most. Our intuitive approach promises: <br/>
            Sustainable energy that reduces reliance on the grid <br/>
            Superior battery management for longer-lasting power <br/>
            Flexible financing options for businesses and homes <br/>
          </p>
          <button
          className=" text-white px-4 py-2 mt-6 w-fit rounded-lg"
          style={{ backgroundColor: "rgba(143, 197, 66, 1)" }}
        >
          See Case Studies
        </button>
        </div>
      </div>
    </>
  );
}
