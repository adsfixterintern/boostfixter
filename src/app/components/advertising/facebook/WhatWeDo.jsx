import React from 'react'

export default function WhatWeDo() {
  const services = [
    {
      id: 1,
      title: "Target Audience Research & Market Analysis",
      desc: "We study your business, customer behavior, interests, and buying patterns deeply. This helps us target the right people at the right moment for better results.",
      subtitle: "Includes:",
      points: [
        "Customer persona profiles",
        "Competitor comparison review",
        "Audience segment planning",
        "Market trend insights collection",
      ],
    },
    {
      id: 2,
      title: "Custom Ad Copywriting & Creative Design",
      desc: "We craft clear messages and visuals that attract attention quickly. Your ads become engaging, memorable, and highly conversion focused.",
      subtitle: "Deliverables:",
      points: [
        "3–5 written ad copy options",
        "3–10 static or video creatives",
        "Headline variations for A/B testing",
      ],
    },
    {
      id: 3,
      title: "Campaign Setup & Management",
      desc: "We organize campaigns with proper structure for stable performance. This ensures clean tracking, scalable results, and higher efficiency.",
      subtitle: "Includes:",
      points: [
        "Funnel-based campaign layout",
        "Ad set and placement setup",
        "Budget usage planning",
        "Timing and delivery optimization",
      ],
    },
    {
      id: 4,
      title: "Conversion Tracking & Analytics Integration",
      desc: "We track every lead, click, and purchase for accurate performance measurement. This gives clear insights to refine campaigns and scale confidently.",
      subtitle: "Platforms:",
      points: [
        "Facebook Pixel setup",
        "Meta Events configuration",
        "Custom conversion tracking",
        "Google Analytics integration",
      ],
    },
    {
      id: 5,
      title: "Retargeting & Remarketing Strategy",
      desc: "We re-engage people who showed interest but didn’t take action. This maximizes conversions by reminding them at the right time.",
      subtitle: "Focus:",
      points: [
        "Recent website visitors",
        "Page & post engagers",
        "Video interaction viewers",
        "Add-to-cart but not purchased users",
      ],
    },
    {
      id: 6,
      title: "A/B Testing & Performance Optimization",
      desc: "We test variations to discover what performs the strongest consistently. Then we improve, refine, and scale the winning strategy effectively.",
      subtitle: "We Optimize:",
      points: [
        "Audience targeting sets",
        "Creative visuals and messages",
        "Headline and call-to-action tone",
        "Landing page user experience",
      ],
    },
  ];

  return (
    <div className="bg-[#F8F8F8] py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="title">What We Do</h1>

        {/* grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 hover:shadow-md transition-all duration-300"
            >
              <h2 className="subtitle">
                {service.id}. {service.title}
              </h2>
              <p className="description mt-4">{service.desc}</p>

              <h4 className="subtitle mt-8">
                {service.subtitle}
              </h4>
              <ul className="list-disc list-inside description">
                {service.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
