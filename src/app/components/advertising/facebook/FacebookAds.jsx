import React from "react";
import CustomButton from "../../shared/CustomButton";
import Image from "next/image";

export default function FacebookAds() {
  return (
    <div className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row  gap-4 justify-between items-stretch">
          {/* left content */}
          <div className="md:w-1/2 space-y-8">
            <h1 className="title">Facebook Ads</h1>
            <p className="description">
              Facebook Ads allow your business to reach the exact people who are
              most likely to buy from you. Whether you're a small startup or a
              well-established brand, our strategic ad campaigns ensure
              measurable growth, improved conversion rates, and maximum return
              on investment (ROI).
            </p>
            <div className="md:w-1/2">
              <CustomButton text={"Quick a Call"} link={"#"}></CustomButton>
            </div>
          </div>
          {/* right content */}
          <div>
            <Image
              src={"/advertising/facebook.png"}
              width={400}
              height={400}
              alt="facebook ads"
              className="h-full object-cover rounded-3xl"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
