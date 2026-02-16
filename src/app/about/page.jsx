import React from "react";
import AboutHero from "../components/about/AboutHero";
import OurVision from "../components/about/OurVision";
import WorkProcess from "../components/about/WorkProcess";
import Squad from "../components/about/Squad";
import Career from "../components/about/Career";
import TalkAbout from "../components/about/TalkAbout";
import OurMemories from "../components/about/OurMemories";

export default function AboutUs() {
  return (
    <div>
      <AboutHero></AboutHero>
      <OurVision></OurVision>
      <OurMemories></OurMemories>
      <WorkProcess></WorkProcess>
      <Squad></Squad>
      <Career></Career>
      <TalkAbout></TalkAbout>
    </div>
  );
}
