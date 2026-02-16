import React from "react";

import ContactHero from "../components/contact/contactHero";
import LocationMap from "../components/contact/LocationMap";
import NeedConsultation from "../services/service/NeedConsultation";

function page() {
  return (
    <div>
      <ContactHero />
      <LocationMap />
      <NeedConsultation />
    </div>
  );
}

export default page