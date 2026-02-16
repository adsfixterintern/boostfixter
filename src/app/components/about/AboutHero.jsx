"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function AboutHero() {

  return (
    <section className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="mb-4 text-center title">Behind the Magic</h2>

        {/* Description */}
        <p className="mb-10 max-w-[70%] mx-auto text-center description">
          We revolutionize digital strategies with cutting-edge, future-ready
          solutions enabling businesses to expand in the dynamic world of
          marketing technology.
        </p>

        {/* Image row */}
        <div className="flex items-center gap-4">
          {/* 1 image */}
          <div className="relative w-43 h-53 hidden lg:block">
            <Image
              src="/About/Office.png"
              alt="Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* 2 image */}
          <div className="relative w-52.5 h-65 hidden md:block">
            <Image
              src="/About/Image-03.png"
              alt="Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* 3 image */}
          <div className="relative w-110 h-81.75">
            <Image
              src="/About/Image-04.png"
              alt="Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* 4 image */}
          <div className="relative w-52.5 h-65 hidden md:block">
            <Image
              src="/About/Image-01.png"
              alt="Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* 5 image */}
          <div className="relative w-43 h-53 hidden lg:block">
            <Image
              src="/About/Image-02.png"
              alt="Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
       
        </div>
      </div>
    </section>
  );
}
