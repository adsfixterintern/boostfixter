"use client";

import React from "react";
import Image from "next/image";

const squad = [
  {
    id: 1,
    image: "/HomePage/Nusrat-Jahan.png",
    name: "Nusrat Jahan",
    role: "Co-Founder @ StyleVista Fashion",
    description:
      "Professional communication, smart planning, and excellent execution. Our brand visibility increased noticeably.",
  },
  {
    id: 2,
    image: "/HomePage/Arif-Mahmud.png",
    name: "Arif Mahmud",
    role: "CEO @ GreenLine Organic Mart",
    description:
      "Professional communication, smart planning, and excellent execution. Our brand visibility increased noticeably.",
  },
  {
    id: 3,
    image: "/HomePage/Sadia-Anwar.png",
    name: "Sadia Anwar",
    role: "Founder @ Herb & Heal Skincare",
    description:
      "Professional communication, smart planning, and excellent execution. Our brand visibility increased noticeably.",
  },
];

export default function ClientsSays() {
  return (
    <div className="pb-20 pt-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex justify-between items-center">
          <h1 className="title">Clients Say</h1>
        </div>
        <div className="grid lg:grid-cols-3">
          {squad.map((member) => (
            <div key={member.id} className="mx-2 flex flex-col mt-10">
              <Image
                src={member.image}
                width={350}
                height={420}
                className="w-full h-[420px] object-cover rounded-2xl"
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
