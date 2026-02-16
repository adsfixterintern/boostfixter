"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "../../shared/CustomButton";


const squad = [
  {
    id: 1,
    image: "/About/pookie.png",
    image2: "/About/pookie-2.png",
    name: "Pookie",
    role: "Chef Happiness Officer",
  },
  {
    id: 2,
    image: "/About/milon.png",
    image2: "/About/milon-2.png",
    name: "Md Milon Hossin",
    role: "Founder & CEO",
  },
  {
    id: 3,
    image: "/About/uzzal.png",
    image2: "/About/uzzal-2.png",
    name: "Md Uzzal",
    role: "Finance & Accounts Manager",
  },
  {
    id: 4,
    image: "/About/Abdul-Kadir.png",
    image2: "/About/Abdul-Kadir-2.png",
    name: "AK Farhan",
    role: "Technical Support Officer",
  },
  {
    id: 5,
    image: "/About/Iran-Rana.png",
    image2: "/About/Iran-Rana-2.png",
    name: "Iran Rana",
    role: "Senior Marketing Executive",
  },
  {
    id: 6,
    image: "/About/Md-Jahed-Hossen.png",
    image2: "/About/Md-Jahed-Hossen-2.png",
    name: "Md Jahed Hossen",
    role: "Brand Strategist(Marketing)",
  },
  {
    id: 7,
    image: "/About/Md-Mosaraf-Hosen.png",
    image2: "/About/Md-Mosaraf-Hosen-2.png",
    name: "Md Mosaraf Hossen",
    role: "Full Stack Developar",
  },
  {
    id: 8,
    image: "/About/Md-Shobuj-Hosen.png",
    image2: "/About/Md-Shobuj-Hosen-2.png",
    name: "Md Shobuj Hossen",
    role: "Chef Technical Manager",
  },
  {
    id: 9,
    image: "/About/Miraz-Hossen.png",
    image2: "/About/Miraz-Hossen-2.png",
    name: "Miraz Hossen",
    role: "Marketing Executive",
  },
  {
    id: 10,
    image: "/About/Md-Hasnat-Nion.png",
    image2: "/About/Md-Hashat-Nion-2.png",
    name: "Md Hasnat Nion",
    role: "Marketing Executive",
  },
  {
    id: 11,
    image: "/About/Shaharior-Islam.png",
    image2: "/About/Shaharior-Islam-2.png",
    name: "Shaharior Islam",
    role: "UI/UX Designer",
  },
  {
    id: 12,
    image: "/About/Md-Limon-Howlader.png",
    image2: "/About/Md-Limon-Howlader-2.png",
    name: "Md Limon Howlader",
    role: "Marketing Executive",
  },
  {
    id: 13,
    image: "/About/Akash-Gharami.png",
    image2: "/About/Akash-Gharami-2.png",
    name: "Akash Gharami",
    role: "UI/UX Designer",
  },
  {
    id: 14,
    image: "/About/Md-Omar-Faruk.png",
    image2: "/About/Md-Omar-Faruk-2.png",
    name: "Md Omar Faruk",
    role: "Full Stack Developar",
  },
];

export default function BoostfixterFamily() {
  return (
    <div className="pt-10 pb-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Top div */}
        <div className="flex justify-between items-center">
          <h1 className="title">
            {" "}
            <h2>Our Awesome BoostFixter Family</h2>
          </h1>
          <CustomButton text={"Join Our Team"} link={"#"} />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {squad.map((member) => (
            <div key={member.id} className="flex flex-col mt-10 group">
              {/* Image wrapper with hover effect */}
              <div className="relative w-full h-[420px] overflow-hidden rounded-2xl">
                {/* Main image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-opacity duration-700 ease-in-out "
                />
              </div>

              <h1 className="subtitle mt-4">
                <h3>{member.name}</h3>
              </h1>
              <h2 className="-mt-1.5 text-gray-500 font-semibold">
                <h3>{member.role}</h3>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
