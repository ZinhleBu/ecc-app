/** @format */

import React from "react";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-screen w-full bg-white">
      <div
        className="col-span-1 md:col-span-2 justify-center p-10 h-full items-center "
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/aaa0/4eed/3c3f2b5195e8eeac12a3c0669eb0b9df?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUFi7BjTcCx0fIm1bDpYYfyOOaDceLfvShEj~27aPtdoASQUCnU7GqkqSjkHCvj~W2TlaEJMpA~aHOB139C88ZnWBELt9yj6hsGL9UcoCR6teCFsQJDp8JBR55NAPg1c5zsIXBKdYQhSqPilZSxop4bki55LRpg1Yg~QhLS4MMLM4sODDAWuIdTYlUtkHBk31-tCcPnF~H5TyaNMvBFtRKY9sn56olptyOw81NG2uFdIiEBbcHg5PzROSTj0nx3B5y-iAWX2Tbr-VAQOZFEZPkI6MhxWNQ48F4bMlY9Mdt1oqNSfWOR-WEKHr7tNFWXUXxdxo7AG2A0w2cB11Uhslw__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-left justify-center gap-5 mt-[40%] ">
          <h1 className="text-3xl md:text-6xl font-bold text-white w-[70%]">
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
            "url('https://s3-alpha-sig.figma.com/img/3e6b/ba39/f74d7598ff4dcd130ed866eb8582f3c9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LrNiPOqVgGsND9dE33CoUYreUuwmt6rPZlg2iq1wCRZNKGeHg0yLfs~mPAWExudc0MghT68Y0mxev1wU1hfNdw4ThWDYWw34zYVPrpqSvPGBld5GRGlN0hJUM6r3pCx7SiLPOkE4jvjw0umHDuDLgdKJll26tn7LecgNKfUFaozfAz5vu4w4w-INCZUDxV8ZVCZneHHdr94nbAHTDYHXSpkWvh6s0LgZg~kV18Lr5ROMY3CIf7nS7TznQYj6U~vWR~qX6vWLh~d027cZziZftzJB6U7L8DafHSTjlzSJ5xB010Sp7~6O~5NueEMKab3bD4WjLc72zaYAmO7Dnp~8Dw__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.8",
        }}
      >
        <div className="flex flex-col items-left justify-center gap-5 mt-[40%] ">
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
