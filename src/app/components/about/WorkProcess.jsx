"use client";
import React from "react";

export default function WorkProcess() {
  const steps = [
    {
      id: 1,
      title: "1. Discover & Define",
      description:
        "It all starts with understanding you. We dive deep into your business goals, target audience, and specific project requirements. Through detailed consultations, we'll help you define the scope, functionalities, and overall strategy for your web or e-commerce development, software, mobile app, digital marketing campaign, or graphic design needs. This initial phase ensures we're perfectly aligned on the path forward.",
    },
    {
      id: 2,
      title: "2. Design & Plan",
      description:
        "It all starts with understanding you. We dive deep into your business goals, target audience, and specific project requirements. Through detailed consultations, we'll help you define the scope, functionalities, and overall strategy for your web or e-commerce development, software, mobile app, digital marketing campaign, or graphic design needs. This initial phase ensures we're perfectly aligned on the path forward.",
    },
    {
      id: 3,
      title: "3. Develop & Implement",
      description:
        "It all starts with understanding you. We dive deep into your business goals, target audience, and specific project requirements. Through detailed consultations, we'll help you define the scope, functionalities, and overall strategy for your web or e-commerce development, software, mobile app, digital marketing campaign, or graphic design needs. This initial phase ensures we're perfectly aligned on the path forward.",
    },
    {
      id: 4,
      title: "4. Review & Refine",
      description:
        "It all starts with understanding you. We dive deep into your business goals, target audience, and specific project requirements. Through detailed consultations, we'll help you define the scope, functionalities, and overall strategy for your web or e-commerce development, software, mobile app, digital marketing campaign, or graphic design needs. This initial phase ensures we're perfectly aligned on the path forward.",
    },
    {
      id: 5,
      title: "5. Launch & Support",
      description:
        "It all starts with understanding you. We dive deep into your business goals, target audience, and specific project requirements. Through detailed consultations, we'll help you define the scope, functionalities, and overall strategy for your web or e-commerce development, software, mobile app, digital marketing campaign, or graphic design needs. This initial phase ensures we're perfectly aligned on the path forward.",
    },
  ];

  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="title">
          Our Work Process
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {steps.slice(0, 3).map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-3xl  transition-all duration-300"
            >
              <h3 className="subtitle ">
                {step.title}
              </h3>
              <p className="description mt-4">
                {step.description}
              </p>
            </div>
          ))}

          {/* Middle Green Text Box */}
          <div className="bg-white text-accent p-6 rounded-3xl">
            <h3 className="text-3xl md:text-5xl font-extrabold ">
              At BoostFixter, we believe
              in a collaborative and transparent approach to every project.
            </h3>
          </div>

          {steps.slice(3).map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-3xl  transition-all duration-300"
            >
              <h3 className="text-lg font-bold leading-relaxed text-accent sm:text-xl md:text-2xl mb-3">
                {step.title}
              </h3>
              <p className="text-base text-accent sm:text-lg md:text-xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
