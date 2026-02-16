"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "../components/shared/CustomButton";

const squad = [
  {
    id: 1,
    image: "/About/milon.png",
    image2: "/About/milon-2.png",
    name: "Md Milon Hossin",
    role: "Founder & CEO",
  },
  {
    id: 2,
    image: "/About/Abdul-Kadir.png",
    image2: "/About/Abdul-Kadir-2.png",
    name: "AK Farhan",
    role: "Technical Support Officer",
  },
  {
    id: 3,
    image: "/About/Md-Shobuj-Hosen.png",
    image2: "/About/Md-Shobuj-Hosen-2.png",
    name: "Md Shobuj Hossen",
    role: "Cheif Technical Manager",
  },
  {
    id: 4,
    image: "/About/Shaharior-Islam.png",
    image2: "/About/Shaharior-Islam-2.png",
    name: "Shaharior Islam",
    role: "UI/UX Designer",
  },
  {
    id: 5,
    image: "/About/Md-Omar-Faruk.png",
    image2: "/About/Md-Omar-Faruk-2.png",
    name: "Md Omar Faruk",
    role: "Full Stack Developer",
  },

  {
    id: 6,
    image: "/About/Md-Jahed-Hossen.png",
    image2: "/About/Md-Jahed-Hossen-2.png",
    name: "Md Jahed Hossen",
    role: "Brand Strategist(Marketing)",
  },
];
export default function InsightStory() {
  return (
        <div className="pt-10 pb-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Top div */}
        <div className="flex justify-between items-center">
          <h1 className="title">
            {" "}
            Insight Storyteller
          </h1>
          <CustomButton text={"Meet The Team"} link={"#"} />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {squad.map((member) => (
            <div key={member.id} className="flex flex-col mt-10">
             
              <div className="relative w-full h-105 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-opacity duration-700 ease-in-out"
                />
              </div>

              <h1 className="subtitle mt-4">
                {member.name}
              </h1>
              <h2 className="-mt-1.5 text-gray-500 font-semibold">
                {member.role}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
