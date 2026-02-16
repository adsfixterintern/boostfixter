"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const companies = [
  {
    id: 1,
    image: "/HomePage/Apex.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 2,
    image: "/HomePage/Meril.png",
    url: "https://squaretoiletries.com/brands-that-care/",
  },
  { id: 3, image: "/HomePage/miyako.png", url: "https://miyako.com.bd/" },
  { id: 4, image: "/HomePage/Pathao.png", url: "https://pathao.com/" },
  { id: 5, image: "/HomePage/walton.png", url: "https://waltonbd.com/" },
  {
    id: 6,
    image: "/HomePage/Apex.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 7,
    image: "/HomePage/Meril.png",
    url: "https://squaretoiletries.com/brands-that-care/",
  },
  { id: 8, image: "/HomePage/miyako.png", url: "https://miyako.com.bd/" },
  { id: 9, image: "/HomePage/Pathao.png", url: "https://pathao.com/" },
  { id: 10, image: "/HomePage/walton.png", url: "https://waltonbd.com/" },
];

export default function Spotlight() {
  return (
    <section className="bg-[#F8F8F8] px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className=" py-10">
          {/* top Marquee */}
          <Marquee
            pauseOnHover={true}
            gradient={false}
            speed={50}
            className="pb-4 space-x-10"
          >
            {companies.map((company) => (
              <a
                key={company.id}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-8 flex items-center justify-center"
              >
                <Image
                  src={company.image}
                  alt={`Company ${company.id} logo`}
                  width={150}
                  height={100}
                  className="object-contain w-full hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </Marquee>
          {/* buttom Marquee */}
          <Marquee
            direction=""
            pauseOnHover={true}
            gradient={false}
            speed={50}
            className=" space-x-10"
          >
            {companies.map((company) => (
              <a
                key={company.id}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-8 flex items-center justify-center"
              >
                <Image
                  src={company.image}
                  alt={`Company ${company.id} logo`}
                  width={150}
                  height={100}
                  className="object-contain w-full hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
