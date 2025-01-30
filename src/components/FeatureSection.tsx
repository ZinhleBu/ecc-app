import Image from "next/image";
import React from "react";

const sections = [
  {
    id: 1,
    title: "Product Features & Benefits",
    description:
      "Lorem ipsum dolor sit amet consectetur. Volutpat eget lacinia vitae odio. Ipsum donec ullamcorper eget elit viverra sed. Lorem ut in et facilisis ultrices mollis. Nisi tristique id integer cras et ultrices enim amet. Massa molestie nisi tincidunt tortor sed. Orci et vitae eu nisl.",
    image: "/image1.jpeg", // Replace with actual image URL
    imagePosition: "left",
  },
  {
    id: 2,
    title: "In The News",
    description:
      "Lorem ipsum dolor sit amet consectetur. Volutpat eget lacinia vitae odio. Ipsum donec ullamcorper eget elit viverra sed. Lorem ut in et facilisis ultrices mollis. Nisi tristique id integer cras et ultrices enim amet. Massa molestie nisi tincidunt tortor sed. Orci et vitae eu nisl.",
    image: "/image2.jpeg",
    imagePosition: "right",
  },
  {
    id: 3,
    title: "Sun In The Fun",
    description:
      "Lorem ipsum dolor sit amet consectetur. Volutpat eget lacinia vitae odio. Ipsum donec ullamcorper eget elit viverra sed. Lorem ut in et facilisis ultrices mollis. Nisi tristique id integer cras et ultrices enim amet. Massa molestie nisi tincidunt tortor sed. Orci et vitae eu nisl.",
    image: "/image3.jpeg",
    imagePosition: "left",
  },
];

const ContentSections = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 space-y-8">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex flex-col md:flex-row items-center bg-gray-100 justify-between p-6 rounded-lg shadow-lg ${
              section.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2">
              <h2 className="text-green-700 text-3xl font-bold">{section.title}</h2>
              <p className="text-gray-700 mt-4">{section.description}</p>
              <a href="#" className="text-green-700 font-semibold mt-4 inline-block">
                Read More →
              </a>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 rounded-lg overflow-hidden">
              <Image
                src={section.image}
                alt={section.title}
                height={300}
                width={400}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSections;
