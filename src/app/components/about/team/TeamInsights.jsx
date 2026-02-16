"use client";

import React from "react";
import Image from "next/image";

const squad = [
  {
    id: 1,
    image: "/About/Akash-Gharami.png",
    name: "Akash Gharami",
    role: "Creative Designer",
    description:
      "In today's digital age, apps have become an integral part of our daily lives. From communication and entertainment to productivity and learning, there's an app for just about everything.",
  },
  {
    id: 2,
    image: "/About/Md-Jahed-Hossen.png",
    name: "Md Jahed Hossen",
    role: "Brand Strategist (Marketing)",
    description:
      "In today's digital age, apps have become an integral part of our daily lives. From communication and entertainment to productivity and learning, there's an app for just about everything.",
  },
  {
    id: 3,
    image: "/About/Md-Omar-Faruk.png",
    name: "Md Omar Faruk",
    role: "Full Stack Developar",
    description:
      "In today's digital age, apps have become an integral part of our daily lives. From communication and entertainment to productivity and learning, there's an app for just about everything.",
  },
];

export default function TeamInsights() {
  return (
    <div className="pb-20 pt-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex justify-between items-center">
          <h1 className="title">Team Insights</h1>
        </div>
        <div className="grid lg:grid-cols-3">
          {squad.map((member) => (
            <div key={member.id} className="mx-2 flex flex-col mt-10">
              <Image
                src={member.image}
                width={350}
                height={420}
                className="w-full h-105 object-cover rounded-2xl"
                alt={member.name}
              />
              <h1 className="subtitle mt-4">{member.name}</h1>
              <h2 className="-mt-1.5 text-gray-500 font-semibold">
                {member.role}
                  </h2>
                  <h3 className="description mt-4">{member.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
