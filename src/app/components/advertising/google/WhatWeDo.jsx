import React from 'react'

export default function WhatWeDo() {
  const services = [
  {
    id: 1,
    title: "Target Audience Research & Trend Analysis",
    desc: "We analyze your market, competitors, and search behavior to identify high-performing keywords.",
    subtitle: "Includes:",
    points: [
      "Keyword research & selection",
      "Competitor keyword analysis",
      "Search trend insights",
      "Audience segmentation",
      "Negative keyword planning",
    ],
  },
  {
    id: 2,
    title: "Creative Video & Ad Copy Production",
    desc: "We craft compelling headlines and descriptions that stand out in search results. Your ads are designed to engage, drive clicks, and improve conversion rates.",
    subtitle: "Deliverables:",
    points: [
      "3–5 ad copy variations",
      "Responsive search ads",
      "Display ad creatives (static or animated)",
      "Ad extensions setup",
    ],
  },
  {
    id: 3,
    title: "Campaign Setup & Ad Management",
    desc: "We organize campaigns with proper structure to maximize efficiency. This allows clean tracking, controlled budget, and better performance.",
    subtitle: "Includes:",
    points: [
      "Search & Display campaign setup",
      "Location & device targeting",
      "Budget allocation & pacing",
      "Scheduling & delivery optimization",
    ],
  },
  {
    id: 4,
    title: "Conversion Tracking & Analytics Integration",
    desc: "We track every click, impression, and conversion for accurate performance measurement.",
    subtitle: "Platforms:",
    points: [
      "Google Ads conversion tracking",
      "Google Analytics integration",
      "Google Tag Manager setup",
      "E-commerce event tracking",
      "Custom performance dashboards",
    ],
  },
  {
    id: 5,
    title: "Retargeting & Remarketing Strategy",
    desc: "We reconnect with users who visited your site but didn’t convert. This increases conversions by showing tailored ads to warm audiences.",
    subtitle: "Focus:",
    points: [
      "Website visitors",
      "Product page viewers",
      "Cart abandoners",
      "Video & YouTube remarketing audiences",
      "Custom audience creation",
    ],
  },
  {
    id: 6,
    title: "A/B Testing & Performance Optimization",
    desc: "We continuously test ad variations, keywords, and targeting strategies. Winning ads are scaled, while underperforming elements are improved.",
    subtitle: "We Optimize:",
    points: [
      "Keyword match types & bids",
      "Ad copy & visuals",
      "Landing page experience",
      "Audience targeting & device adjustments",
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
