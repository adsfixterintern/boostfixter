import FacebookConsultation from '@/app/components/advertising/Facebook/FacebookConsultation'
import TikTokAds from '@/app/components/advertising/TikTok/TikTokAds'
import TikTokPricing from '@/app/components/advertising/TikTok/TikTokPricing'
import WhatWeDo from '@/app/components/advertising/TikTok/WhatWeDo'
import React from 'react'

export default function TikTok() {
  return (
    <div>
      <TikTokAds></TikTokAds>
      <WhatWeDo></WhatWeDo>
      <TikTokPricing></TikTokPricing>
      <FacebookConsultation></FacebookConsultation>
    </div>
  )
}
