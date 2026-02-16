"use client";
import Image from "next/image";
import React from "react";

export default function AboutHomePage() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="mb-4 text-center title">We Build Ideas Together</h2>

        {/* Description */}
        <p className="mb-10 max-w-[70%] mx-auto text-center description">
          BoostFixter is a creative-driven digital marketing team where strategy
          meets storytelling. We believe great results come when people
          collaborate, share ideas, laugh, plan and build together.
        </p>

        {/* Full Width Image */}

        <div className="w-full">
          <Image
            src="/service/serviceFrame.png"
            alt="service-frame"
            width={1200}
            height={800}
            className="object-cover w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
