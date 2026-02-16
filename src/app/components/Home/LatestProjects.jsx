import React from "react";
import CustomButton from "../Shared/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    "id": 1,
    "name": "EccokValy",
    "link": "https://reactjs.org",
    "image": "/project/project1.png"
  },
  {
    "id": 2,
    "name": "Creato Care",
    "link": "",
    "image": "/project/project2.png"
  },
  {
    "id": 3,
    "name": "Jannatul Maowa Dental",
    "link": "https://tailwindcss.com",
    "image": "/project/project3.png"
  }
]


export default function LatestProjects() {
  return (
    <div className="bg-[#F8F8F8] pb-20 pt-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="title">
            We Have Done!
          </h1>
          <CustomButton text={"See Our All Projects"} link={"#"}></CustomButton>
        </div>
        {/* animation main card */}
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          {
            projects.map((project) => (
              <div key={project.id}>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={300}
                  className="w-full"
                ></Image>
                <Link
                  className="flex justify-center mt-4 text-lg font-normal text-center underline text-accent "
                href={project.link}
                >{project.name}<ArrowUpRight /></Link>
              </div>
            ))
         }
        </div>
      </div>
    </div>
  );
}
