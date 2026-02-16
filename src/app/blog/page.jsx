import React from 'react'
import AllBlog from '../components/shared/blogs/AllBlog'
import InsightStory from '../contact/InsightStory'
import NeedConsultation from '../services/service/NeedConsultation'

export default function page() {
  return (
    <div>
        <AllBlog></AllBlog>
        <InsightStory></InsightStory>
        <NeedConsultation></NeedConsultation>
    </div>
  )
}
