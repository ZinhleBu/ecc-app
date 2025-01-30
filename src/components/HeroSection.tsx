/** @format */

import React from "react";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-screen w-full bg-white">
      <div
        className="col-span-1 md:col-span-2 justify-center p-10 h-full items-center "
        style={{
          backgroundImage:
          "url('/main1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <div className="flex flex-col items-left justify-center gap-5 mt-[30%] ">
          <h1 className="text-3xl md:text-6xl font-bold text-white w-[80%]">
            {" "}
            Power Your Home With Reliable Energy
          </h1>
          <p className="text-white text-start text-sm md:text-xl w-[70%]">
            Explore affordable solar and battery systems custom-designed to
            provide your home with uninterrupted, eco-friendly power.
          </p>
          <button
            className=" text-white px-4 py-2 w-fit rounded-lg"
            style={{ backgroundColor: "rgba(8, 122, 55, 1)" }}
          >
            Find a Home Solution
          </button>
        </div>
      </div>
      <div
        className="col-span-1 md:col-span-2 justify-center p-10 h-full items-center "
        style={{
          backgroundImage:
            "url('/main2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-left justify-center gap-5 mt-[30%] ">
          <h1 className="text-3xl md:text-6xl font-bold text-white w-[70%]">
            {" "}
            Empower Your Business with Smart Energy
          </h1>
          <p className="text-white text-start text-sm md:text-xl w-[70%]">
            Future-proof your business with scalable solar and battery systems
            tailored to your commercial energy needs.
          </p>
          <button
            className=" text-white px-4 py-2  w-fit rounded-lg"
            style={{ backgroundColor: "rgba(8, 122, 55, 1)" }}
          >
            Find a Home Solution
          </button>
        </div>
      </div>
    </div>
  );
}
