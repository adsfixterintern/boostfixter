"use client";
import Image from "next/image";
import React from "react";

export default function OurTeamHero() {
  return (
    <section className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="mb-4 text-center title">Thinkers of BoostFixter</h2>

        {/* Description */}
        <p className="mb-10 max-w-[70%] mx-auto text-center description">
          More than teammates, we’re friends who build ideas together with
          coffee, teamwork, and a shared vision that keeps us inspired every
          day.
        </p>

        {/* Image row */}
        <div className="flex items-center gap-4">
          {/* 1 image */}
          <div className="relative w-[172px] h-[212px] hidden lg:block">
            <Image
              src="/About/Office.png"
              alt="Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* 2 image */}
          <div className="relative w-[210px] h-[260px] hidden md:block">
            <Image
              src="/About/Image-03.png"
              alt="Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* 3 image */}
          <div className="relative w-[440px] h-[327px]">
            <Image
              src="/About/Image-04.png"
              alt="Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* 4 image */}
          <div className="relative w-[210px] h-[260px] hidden md:block">
            <Image
              src="/About/Image-01.png"
              alt="Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* 5 image */}
          <div className="relative w-[172px] h-[212px] hidden lg:block">
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
