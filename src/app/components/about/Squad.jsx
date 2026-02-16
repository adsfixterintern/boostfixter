"use client";

import React from "react";
import CustomButton from "../../components/shared/CustomButton";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const squad = [
  {
    id: 1,
    image: "/About/pookie.png",
    name: "Pookie",
    role: "Cheif Happiness Officer",
  },
  {
    id: 2,
    image: "/About/milon.png",
    name: "Md Milon Hossin",
    role: "Founder & CEO",
  },
  {
    id: 3,
    image: "/About/uzzal.png",
    name: "Md Uzzal",
    role: "Finance & Accounts Manager",
  },
  {
    id: 4,
    image: "/About/Abdul-Kadir.png",
    name: "AK Farhan",
    role: "Technical Support Officer",
  },
  {
    id: 5,
    image: "/About/Iran-Rana.png",
    name: "Iran Rana",
    role: "Senior Marketing Executive",
  },
  {
    id: 6,
    image: "/About/Md-Jahed-Hossen.png",
    name: "Md Jahed Hossen",
    role: "Brand Strategist(Marketing)",
  },
  {
    id: 7,
    image: "/About/Md-Mosaraf-Hosen.png",
    name: "Md Mosaraf Hossen",
    role: "Web Developer",
  },
  {
    id: 8,
    image: "/About/Md-Shobuj-Hosen.png",
    name: "Md Shobuj Hossen",
    role: "Chef Technical Manager",
  },
  {
    id: 9,
    image: "/About/Miraz-Hossen.png",
    name: "Miraz Hossen",
    role: "Marketing Executive",
  },
];

export default function Squad() {
  return (
    <div className="pb-20 pt-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex justify-between items-center">
          <h1 className="title">BoostFixter Squad</h1>
          <CustomButton text={"Meet The Team"} link={"#"} />
        </div>

        {/* content div with marquee */}
        <Marquee speed={50} gradient={false} pauseOnHover>
          {squad.map((member) => (
            <div key={member.id} className="mx-2 flex flex-col mt-10">
              <Image
                src={member.image}
                width={350}
                height={420}
                className="w-[350px] h-[420px] object-cover rounded-2xl"
                alt={member.name}
              />
              <h1 className="subtitle mt-4">{member.name}</h1>
              <h2 className="-mt-1.5 text-gray-500 font-semibold">
                {member.role}
              </h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
