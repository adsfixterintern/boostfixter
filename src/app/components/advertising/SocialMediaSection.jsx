"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../../components/shared/CustomButton";

export default function SocialMediaSection() {
  const services = [
    {
      title: "Facebook Ads",
      img: "/advertising/facebook.png",
      description:
        "Facebook Ads allow your business to target potential customers with precision. From awareness to conversion, campaigns deliver measurable results and ensure maximum ROI.",
      list: [
        "Target Audience Research & Analysis",
        "Custom Ad Creation & Copywriting",
        "Campaign Setup & Management",
        "Conversion Tracking & Analytics",
        "Retargeting Ads for Higher ROI",
        "Facebook Pixel Integration",
        "A/B Testing for Ad Optimization",
        "Performance Reporting & Recommendations",
      ],
      button: "Quick a Call",
    },
    {
      title: "TikTok Ads",
      img: "/advertising/tiktok.png",
      description:
        "TikTok Ads are perfect for brands that want trend-driven engagement with younger audiences. We design impactful campaigns and help turn viewers into loyal customers.",
      list: [
        "TikTok Account Setup & Strategy",
        "Creative Video Ad Production",
        "Trend Analysis & Hashtag Research",
        "Campaign Optimization for Maximum Reach",
        "Influencer Collaboration & Sponsored Content",
        "In-Feed Ads, Spark Ads & TopView Ads",
        "Audience Retargeting",
        "Performance Reporting & Insights",
      ],
      button: "Quick a Call",
    },
    {
      title: "Google Ads",
      img: "/advertising/google.png",
      description:
        "Google Ads helps your business reach people actively searching for your products or services. Search, display, and shopping campaigns are tailored for growth.",
      list: [
        "Keyword Research & Analysis",
        "Search & Display Ad Campaigns",
        "Shopping Ads & Remarketing",
        "Conversion Tracking & Optimization",
        "Ad Copywriting & Creative Design",
        "Google Analytics Integration",
        "Bid Management & Budget Optimization",
        "Monthly Performance Reporting",
      ],
      button: "Quick a Call",
    },
  ];

  return (
    <section className="text-gray-800 bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-3 transition-all duration-300 bg-white border border-gray-200 rounded-2xl "
            >
              {/* Top Section */}
              <div>
                <div className="relative w-full h-56">
                  <Image
                    src={service.img}
                    alt={service.img}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  />
                </div>

                {/* Text + Button */}
                <div className="mt-6 text-left">
                  <h2 className="mb-2 text-2xl font-medium text-primary">
                    {service.title}
                  </h2>
                  <Link
                    href="#"
                    className="flex items-center gap-1 underline text-primary"
                  >
                    Book a Call <ArrowUpRight size={18} />
                  </Link>
                </div>

                {/* Text Section */}
                <p className="mb-4 leading-relaxed text-[#676E72]">
                  {service.description}
                </p>
                <h5 className="mb-2 subtitle">Services We Offer:</h5>
                <ul className="mb-6 ml-5 space-y-1 text-[#676E72] list-decimal">
                  {service.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Button (Always Bottom) */}
              <div className="flex justify-start my-4 text-start">
                <CustomButton
                  text={service.button}
                  link="#"
                  className="px-4 py-2 text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
