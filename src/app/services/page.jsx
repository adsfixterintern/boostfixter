import React from "react";
import ServiceHome from "../services/service/ServiceHome";
import NeedConsultation from "../services/service/NeedConsultation";
import CyberSecurityComponent from "../services/service/CyberSecurityComponent";
import WebDevelopmentComponent from "../services/service/WebDevelopmentComponent";
import VisualCreativeComponent from "../services/service/VisualCreativeComponent";
import DigitalMarketingComponent from "../services/service/DigitalMarketingComponent";

function Services() {
  return (
    <div className={"w-full overflow-x-hidden space-y-5"}>
      <ServiceHome></ServiceHome>
      <DigitalMarketingComponent></DigitalMarketingComponent>
      <VisualCreativeComponent></VisualCreativeComponent>
      <WebDevelopmentComponent></WebDevelopmentComponent>
      <CyberSecurityComponent></CyberSecurityComponent>
      <NeedConsultation></NeedConsultation>
    </div>
  );
}

export default Services;
