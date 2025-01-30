/** @format */

import React from "react";

export default function Banner() {
  return (
    <div
     className="flex flex-col justify-center items-start  mt-0 py-3 px-5 md:py-16 md:px-20 h-[40vh] md:h-[40vh] w-full gap-4 bg-white"
      style={{ backgroundColor: "rgba(8, 122, 55, 1)" }}
    >
      <h1 className="text-2xl md:text-6xl mt-16 font-bold text-white">
        Join Our Network of Solar Resellers
      </h1>
      <p className="text-sm md:text-2xl from-neutral-200 text-white">
        Partner with Specialized Solar Solutions Africa and bring top-tier,
        reliable solar solutions to your customers.
      </p>
      <button
        className=" text-white px-4 py-2  w-fit rounded-lg"
        style={{ backgroundColor: "rgba(143, 197, 66, 1)" }}
      >
        Partner Wwith Us{" "}
      </button>
    </div>
  );
}
