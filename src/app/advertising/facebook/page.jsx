import FacebookAds from "@/app/components/advertising/Facebook/FacebookAds";
import FacebookConsultation from "@/app/components/advertising/Facebook/FacebookConsultation";
import Pricing from "@/app/components/advertising/Facebook/Pricing";
import WhatWeDo from "@/app/components/advertising/Facebook/WhatWeDo";
import React from "react";

export default function Facebook() {
  return (
    <div>
      <FacebookAds></FacebookAds>
      <WhatWeDo></WhatWeDo>
      <Pricing></Pricing>
      <FacebookConsultation></FacebookConsultation>
    </div>
  );
}
