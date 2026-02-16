import React from "react";

export default function GooglePricing() {
 const plans = [
  {
    name: "Starter",
    desc: "Ideal for first-time campaigns.",
    price: "৳ 9,900",
    period: "/month",
    adSpend: "Up to ৳ 20,000",
    features: [
      "1 Google Ads campaign setup",
      "3 ad copy variations",
      "2–3 display or responsive ads",
      "Basic keyword targeting",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    desc: "For growing brands seeking more traffic.",
    price: "৳ 12,000",
    period: "/month",
    adSpend: "৳ 20,000 – 80,000",
    features: [
      "2–3 campaigns setup",
      "5 ad copy variations",
      "5–7 creatives",
      "Advanced keyword targeting",
      "Bi-weekly performance report",
    ],
  },
  {
    name: "Scale Pro",
    desc: "Maximum ROI with full-scale management.",
    price: "৳ 22,000",
    period: "/month",
    adSpend: "৳ 80,000+",
    features: [
      "3–5 campaigns setup",
      "7+ ad copy variations",
      "8–10 creatives",
      "Competitor analysis",
      "Remarketing strategy",
    ],
  },
];


  return (
    <div className="pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="title mb-2">Service Packages & Pricing</h2>
        <p className="description max-w-3xl mx-auto mb-12">
          Note: The ad spend will be paid directly to Google. We only charge
          for the service management fee.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                index === 1
                  ? "bg-[#013F32] text-white scale-105 shadow-xl"
                  : "bg-[#F8F8F8] hover:shadow-md text-gray-800"
              }`}
            >
              {/* Top */}
              <div>
                <h3
                  className={`text-[#676E72] font-extrabold lg:text-5xl text-3xl mb-2 ${
                    index === 1 ? "text-white" : "text-[#013F32]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mb-6 ${
                    index === 1 ? "text-gray-200" : "description"
                  }`}
                >
                  {plan.desc}
                </p>

                <div
                  className={`text-3xl font-bold mb-1 ${
                    index === 1 ? "text-white" : "text-[#013F32]"
                  }`}
                >
                  {plan.price}
                  <span
                    className={`text-base font-medium ${
                      index === 1 ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mb-6 ${
                    index === 1 ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Ad Spend:{" "}
                  <span
                    className={`font-semibold ${
                      index === 1 ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {plan.adSpend}
                  </span>
                </p>

                <ul
                  className={`space-y-2 text-left list-disc list-inside ${
                    index === 1 ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-8">
                <button
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    index === 1
                      ? "bg-white text-[#013F32] hover:bg-gray-100"
                      : "bg-[#013F32] text-white hover:bg-green-800"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
