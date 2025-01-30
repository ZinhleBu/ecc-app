/** @format */

import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "Standard L4 Energydock Victron",
    image: "/placeholder-image.png", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Standard L4 Energydock Victron",
    image: "/placeholder-image.png",
  },
  {
    id: 3,
    name: "Standard L4 Energydock Victron",
    image: "/placeholder-image.png",
  },
  {
    id: 4,
    name: "Standard L4 Energydock Victron",
    image: "/placeholder-image.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: "rgba(143, 197, 66, 1)" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-6">
          Featured products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-4 rounded-lg flex flex-col justify-between shadow-lg min-h-[450px]"
            >
              <div className="bg-white rounded-lg p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={300}
                  className="w-full h-40 object-contain"
                />
              </div>
              <h3 className="text-3xl font-semibold mt-4 text-gray-500">
                {product.name}
              </h3>
              <button className="mt-4 text-white py-2 px-4 rounded-lg w-full hover:bg-green-600"             style={{ backgroundColor: "rgba(143, 197, 66, 1)" }}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="text-white py-2 px-6 rounded-lg hover:bg-green-800"
            style={{ backgroundColor: "rgba(8, 122, 55, 1)" }}
            >
            See All Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
