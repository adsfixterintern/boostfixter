"use client";

import Career from "@/app/components/about/Career";
import BoostfixterFamily from "../../../app/components/about/team/BoostFixterFamily";
import TeamHero from "../../components/about/team/TeamHero";
import TeamInsights from "../../components/about/team/TeamInsights";
import React from "react";

const OurTeam = () => {
  return (
    <section >
      <TeamHero></TeamHero>
      <BoostfixterFamily></BoostfixterFamily>
      <Career></Career>
      <TeamInsights></TeamInsights>
    </section>
  );
};

export default OurTeam;
