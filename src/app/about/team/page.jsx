"use client";


import BoostfixterFamily from "@/app/components/aboutUs/about/BoostfixterFamily";
import CareerOpportunities from "@/app/components/aboutUs/about/CarrerOppertunities";
import OurTeamHero from "@/app/components/aboutUs/about/OurTeamHero";
import TeamInsights from "@/app/components/aboutUs/about/TeamInsights";
import React from "react";

const OurTeam = () => {
  return (
    <section >
      <OurTeamHero></OurTeamHero>
      <BoostfixterFamily></BoostfixterFamily>
      <CareerOpportunities></CareerOpportunities>
      <TeamInsights></TeamInsights>
    </section>
  );
};

export default OurTeam;
