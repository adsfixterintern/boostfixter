import React from "react";
import Image from "next/image";
import CustomButton from "../Shared/CustomButton";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Digital Marketing",
    image: "/service/digital_marketing.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    image: "/service/graphic_design.png",
  },
  {
    id: 3,
    name: "Social Media Management",
    image: "/service/social_media.png",
  },
  {
    id: 4,
    name: "Web Design & Development",
    image: "/service/web_desing.png",
  },
  {
    id: 5,
    name: "Cyber Security",
    image: "/service/cyber.png",
  },
  {
    id: 6,
    name: "Reporting & Analytics",
    image: "/service/reporting.png",
  },
];

function Services() {
  return (
    <section className="pb-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="title">
            Our Services
          </h1>
          <div className="">
            <CustomButton text="See All Services" link="#" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#F8F8F8] p-6 rounded-4xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                />
              </div>

              {/* Text + Button */}
              <div className="mt-6 text-left">
                <h2 className="mb-2 text-2xl font-medium text-primary">
                  {service.name}
                </h2>
                <Link
                  href="#"
                  className="flex items-center gap-1 underline text-primary"
                >
                  Book a Call <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
