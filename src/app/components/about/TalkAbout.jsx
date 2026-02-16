import React from "react";
import CustomButton from "../../components/shared/CustomButton";
import Image from "next/image";

export default function TalkAbout() {
  return (
    <div className="my-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6 text-center md:text-left md:w-[60%]">
            <h1 className="title">
              Let's Talk <br /> About Your Dream
            </h1>

            <p className="description">
              Have a project in mind? Let’s collaborate and create something{" "}
              <br />
              extraordinary. Reach out to us, and we’ll help turn your ideas{" "}
              <br />
              into impactful digital experiences.
            </p>

            <div className="flex justify-center md:justify-start">
              <CustomButton text={"Let’s Collab"} link={"#"} />
            </div>
          </div>

          {/* RIGHT SIDE */}
         <div className="md:w-[40%] text-center md:text-right">
  <Image
    src={"/About/Office_.png"}
    alt="Farhan"
    width={400}
    height={320}
    className="w-full h-auto object-cover rounded-3xl"
  />
</div>
        </div>
      </div>
    </div>
  );
}
