import React from 'react'

export default function WhatWeDo() {
  const services = [
  {
    id: 1,
    title: "Target Audience Research & Trend Analysis",
    desc: "We study your audience behavior, interests, and TikTok trends deeply. This helps us target the right people at the right time for maximum engagement.",
    subtitle: "Includes:",
    points: [
      "Customer persona profiles",
      "Competitor TikTok analysis",
      "Trend & hashtag research",
      "Viral content opportunities",
    ],
  },
  {
    id: 2,
    title: "Creative Video & Ad Copy Production",
    desc: "We craft short-form, attention-grabbing videos and messages. Your TikTok ads become engaging, memorable, and conversion-focused.",
    subtitle: "Deliverables:",
    points: [
      "3–5 written ad copy options",
      "3–10 TikTok video or static creatives",
      "Headline variations for A/B testing",
    ],
  },
  {
    id: 3,
    title: "Campaign Setup & Ad Management",
    desc: "We structure campaigns for stable growth and optimal performance. This ensures efficient spend, clean tracking, and scalable results.",
    subtitle: "Includes:",
    points: [
      "Campaign for in-feed, Spark & TopView ads",
      "Ad set and placement setup",
      "Budget allocation & pacing strategy",
      "Timing and delivery optimization",
    ],
  },
  {
    id: 4,
    title: "Conversion Tracking & Analytics Integration",
    desc: "We track every click, view, and action to measure campaign success. This allows data-driven decisions to improve performance and ROI.",
    subtitle: "Platforms:",
    points: [
      "TikTok Pixel setup",
      "Event & conversion tracking",
      "Google Analytics integration",
      "Custom performance dashboards",
    ],
  },
  {
    id: 5,
    title: "Retargeting & Remarketing Strategy",
    desc: "We reconnect with users who engaged but didn’t convert. This maximizes results by showing ads at the most effective moments.",
    subtitle: "Focus:",
    points: [
      "Recent video viewers",
      "Profile and post engagers",
      "Add-to-cart but non-purchasers",
      "Lookalike audience expansion",
    ],
  },
  {
    id: 6,
    title: "A/B Testing & Performance Optimization",
    desc: "We continuously test variations to find the top-performing ads. Then we optimize and scale strategies for long-term TikTok success.",
    subtitle: "We Optimize:",
    points: [
      "Audience targeting sets",
      "Creative visuals & messaging",
      "Headline and call-to-action tone",
      "Video length, hooks & landing page",
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
