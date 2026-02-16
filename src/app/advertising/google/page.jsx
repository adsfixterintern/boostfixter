import FacebookConsultation from "@/app/components/advertising/Facebook/FacebookConsultation";
import GoogleAds from "@/app/components/advertising/Google/GoogleAds";
import GooglePricing from "@/app/components/advertising/Google/GooglePricing";
import WhatWeDo from "@/app/components/advertising/Google/WhatWeDo";
import React from "react";

export default function Google() {
  return (
    <div>
      <GoogleAds></GoogleAds>
      <WhatWeDo></WhatWeDo>
      <GooglePricing></GooglePricing>
      <FacebookConsultation></FacebookConsultation>
    </div>
  );
}
