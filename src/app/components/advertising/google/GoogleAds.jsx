import React from "react";
import CustomButton from "../../Shared/CustomButton";
import Image from "next/image";

export default function GoogleAds() {
  return (
    <div className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row  gap-4 justify-between items-stretch">
          {/* left content */}
          <div className="md:w-1/2 space-y-8">
            <h1 className="title">Google Ads</h1>
            <p className="description">
              Reach your audience precisely when they’re searching, browsing, or
              watching. Our Google Ads campaigns target high-intent users,
              turning clicks into customers with optimized ads, smart bidding,
              and continuous performance tracking.
            </p>
            <div className="md:w-1/2">
              <CustomButton text={"Quick a Call"} link={"#"}></CustomButton>
            </div>
          </div>
          {/* right content */}
          <div>
            <Image
              src={"/advertising/google.png"}
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
