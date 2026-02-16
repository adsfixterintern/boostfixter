"use client";

import React from "react";

export default function BenefitsSection() {
  const benefitsData = [
    {
      id: 1,
      title: "Proven Track Record",
      description:
        "Our portfolio showcases successful projects and satisfied clients, demonstrating our ability to deliver measurable results.",
    },
    {
      id: 2,
      title: "Innovative Strategies",
      description:
        "Stay ahead of the competition with cutting-edge approaches, leveraging AI, automation, and creative visuals.",
    },
    {
      id: 3,
      title: "Personalized Solutions",
      description:
        "Every strategy is tailored to your business, audience, and objectives, ensuring maximum impact.",
    },
    {
      id: 4,
      title: "Safe Payment Gateway",
      description:
        "Experience transparent communication, regular updates, and ongoing support as we prioritize your success.",
    },
  ];

  return (
    <section className="px-4 pb-20 pt-10 bg-[#F8F8F8]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="title">
          Benefits with Us
        </h2>
        {/* Benefit Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-10">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="p-6 transition-all duration-300 bg-white rounded-2xl "
            >
              <div className="flex items-start gap-3 mb-3">
                {/* <div className="w-1 h-8 mt-1 bg-teal-700 rounded-full" /> */}
                <h3 className="subtitle">
                  {benefit.title}
                </h3>
              </div>
              <p className="description">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
