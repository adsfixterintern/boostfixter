import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Image1 = [
  { id: 1, image: "/About/Office.png", alt: "Office team working" },
  { id: 2, image: "/About/Image-03.png", alt: "BoostFixter office event" },
  { id: 3, image: "/About/Image-04.png", alt: "Team collaboration moment" },
  { id: 4, image: "/About/Image-01.png", alt: "Office workspace view" },
  { id: 5, image: "/About/Image-02.png", alt: "Team creative session" },
];

export default function OurMemories() {
  return (
    <div className="pb-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* 1 Image Marquee */}
        <Marquee speed={40} gradient={false} pauseOnHover>
          {Image1.map((member) => (
            <div key={member.id} className="mx-3 flex flex-col mt-5">
              <div className="relative w-120 sm:w-[320px] lg:w-87.5 h-70  overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover transition-transform duration-500 backdrop-opacity-100"
                  quality={100}
                  priority
                />
              </div>
            </div>
          ))}
        </Marquee>
        {/* 2 Image Marquee */}
        <Marquee speed={40} direction="" gradient={false} pauseOnHover>
          {Image1.map((member) => (
            <div key={member.id} className="mx-3 flex flex-col mt-5">
              <div className="relative w-120 sm:w-[320px] lg:w-87.5 h-70  overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover transition-transform duration-500 backdrop-opacity-100"
                  quality={100}
                  priority
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
