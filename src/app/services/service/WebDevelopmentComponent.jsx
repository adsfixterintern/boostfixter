"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomButton from "../../components/shared/CustomButton";

const MotionImage = motion(Image);

export default function WebDevelopmentComponent() {
  const services = [
    {
      number: "01",
      title: "Network Security",
      description:
        "Protect your infrastructure from threats and vulnerabilities with advanced network protection strategies.",
    },
    {
      number: "02",
      title: "Data Protection & Encryption",
      description:
        "Secure your sensitive data with military-grade encryption and protection protocols.",
    },
    {
      number: "03",
      title: "Vulnerability Assessment",
      description:
        "Identify and address security weaknesses before attackers can exploit them.",
    },
    {
      number: "04",
      title: "Threat Detection & Monitoring",
      description:
        "Real-time threat identification and rapid response to security incidents.",
    },
    {
      number: "05",
      title: "Firewall & Endpoint Security",
      description:
        "Advanced protection for all your endpoints with intelligent firewall systems.",
    },
    {
      number: "06",
      title: "Security Audits & Compliance",
      description:
        "Ensure compliance with industry standards and security best practices.",
    },
    {
      number: "07",
      title: "Incident Response & Recovery",
      description:
        "Swift and effective response to security incidents and business continuity.",
    },
    {
      number: "08",
      title: "Employee Security Training",
      description:
        "Educate your team on security best practices and threat awareness.",
    },
  ];

  return (
    <div className="bg-[#F8F8F8] w-full overflow-x-hidden">
      {/* -------- Hero Section -------- */}
      <section className="pt-10 md:pb-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
            {/* Text Section */}
            <div className="space-y-5 lg:text-left">
              <h1 className="title ">Web Design & Development</h1>
              <p className="description">
                When it comes to digital marketing, we create strategies that
                drive real business growth. Our goal is to help your brand reach
                the right audience, increase engagement, and convert leads into
                customers.
              </p>
              <div className="flex lg:justify-start">
                <CustomButton text={"Quick a Call"} link={"#"} />
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center w-full lg:justify-end">
              <Image
                src="/service/marketing.png"
                alt="Cyber Security"
                width={500}
                height={500}
                className="object-cover w-full max-w-125 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------- Services Grid -------- */}
      <section className="pt-10 md:pb-20">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex flex-col justify-between p-6 transition-all duration-300 bg-white rounded-xl "
              >
                <div>
                  <div className="mb-2 text-3xl text-gray-400">
                    {service.number}
                  </div>
                  <h3 className="mb-6 text-3xl font-semibold text-gray-400 text-accent">
                    {service.title}
                  </h3>
                </div>
                <div className="mt-4 flex underline items-center gap-1 text-sm font-semibold text-[#00473E] hover:gap-2 transition-all duration-300 cursor-pointer">
                  Details
                  <ArrowRight className="w-5 h-5 transform -rotate-45deg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- Expert Connect Section -------- */}
      <section className="pt-10 md:pb-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-9">
            {/* IMAGE SIDE */}
            <div className="relative flex w-full overflow-hidden rounded-2xl md:justify-start md:col-span-4">
              <Image
                alt="Expert"
                src="/About/Md-Mosaraf-Hosen.png"
                width={220}
                height={220}
                className="relative w-67.5 sm:w-75 md:w-62.5 lg:w-[320px] rounded-2xl"
              />
              {/* Animated Star */}
              <MotionImage
                src="/HomePage/Star.png"
                alt="Star"
                width={150}
                height={150}
                animate={{
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[40%] z-100 left-[70%] -translate-x-[50%] -translate-y-[50%] w-[210px] sm:w-[100px] md:w-[150px] lg:w-[200px] xl:left-[65%] lg:left-[75%] md:left-[75%]"
                style={{ maxWidth: "100%", pointerEvents: "none" }}
              />
            </div>
            {/* TEXT SIDE */}
            <div className="space-y-5 text-center md:text-left md:col-span-5 ">
              <h1 className="title">
                Connect with our Web Design & Development Experts Today!
              </h1>
              <p className="description">
                Have a project in mind? Let’s collaborate and create something
                extraordinary. Reach out to us, and we’ll help turn your ideas
                into impactful digital experiences.
              </p>
              <div className="flex justify-center md:justify-start">
                <CustomButton text={"Quick a Call"} link={"#"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
