/** @format */

import React from "react";

export default function BannerSection() {
  return (
    <div className="flex flex-col justify-center items-start py-80 px-20 h-[30vh] w-ful gap-4 bg-white">
      <h1 className="text-3xl md:text-6xl font-bold text-green-900">
        Affordable Back-up Power Solutions <br /> for Your Home or Business
      </h1>
      <p className="text-sm md:text-lg text-gray-400">
        At Specialised Solar Systems Africa, we provide affordable,
        custom-designed solar solutions that are easy to install and maintain.
        Whether you&apos;re looking for a cost-effective battery solution or a
        utility-style solar solution, our products empower homes and businesses
        with reliable, eco-friendly energy—all without breaking the bank.
        <br/>
        As
        trusted leaders in renewable energy solutions, we guarantee top-tier
        quality, fast delivery, and competitive pricing. You don&apos;t have to
        choose between affordability and sustainability—you can have both,
        backed by our unmatched customer service.
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
