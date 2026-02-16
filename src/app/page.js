import Image from "next/image";
import Hero from "./components/Home/Hero";
import Spotlight from "./components/Home/Spotlight";
import OurStory from "./components/Home/OurStory";
import HomeReviw from "./components/Home/HomeReview";
import Services from "./components/Home/Services";
import BenefitsSection from "./components/Home/BenefitsSection";
import ClientRatings from "./components/Home/ClientRatings";
import LatestProjects from "./components/Home/LatestProjects";
import ClientsSays from "./components/Home/ClientsSays";
import LatestBlog from "./components/Home/LatestBlogsSection";
import ContactForm from "./components/Home/Consulation";

export default function Home() {
  return (
    <div className="min-h-screen py-4">
     <Hero/>
     <Spotlight/>
     <OurStory/>
     <HomeReviw/>
     <Services/>
     <BenefitsSection/>
     <ClientRatings/>
     <LatestProjects/>
     <ClientsSays/>
     <ContactForm/>
     <LatestBlog/>
    </div>
  );
}
