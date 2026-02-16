import React from "react";
import CustomButton from "../../Shared/CustomButton";
import Image from "next/image";

export default function TikTokAds() {
  return (
    <div className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row  gap-4 justify-between items-stretch">
          {/* left content */}
          <div className="md:w-1/2 space-y-8">
            <h1 className="title">Tiktok Ads</h1>
            <p className="description">
              Leverage the power of TikTok to reach millions with creative,
              viral-ready content. We craft campaigns that grab attention, drive
              engagement, and turn viewers into loyal customers through precise
              targeting, trending creatives, and data-driven strategies.
            </p>
            <div className="md:w-1/2">
              <CustomButton text={"Quick a Call"} link={"#"}></CustomButton>
            </div>
          </div>
          {/* right content */}
          <div>
            <Image
              src={"/advertising/tiktok.png"}
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
