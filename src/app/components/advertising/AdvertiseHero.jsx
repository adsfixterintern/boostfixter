"use client";

import { Globe } from "lucide-react";

export default function AdvertiseHero() {
  return (
     <section className="py-10 overflow-hidden md:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="mx-auto mb-4 text-center md:w-1/2 title">Turn Traffic into Sales with Expert Ads.</h2>

        {/* Description */}
        <p className="mb-10 max-w-[70%] mx-auto text-center description">
          From Facebook to TikTok to Google, we craft campaigns that drive traffic, engagement, and sales for your business.
        </p>
      </div>
    </section>
  );
}
