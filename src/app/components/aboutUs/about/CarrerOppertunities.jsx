"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Star from "../../../../../public/HomePage/Star.png";
import CustomButton from "../../shared/CustomButton";

export default function CareerOpportunities() {
  return (
    <section className="pb-20 pt-10 bg-[#F8F8F8] overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              Career Opportunities
            </h2>

            {/* IMAGE SECTION */}
            <div className="relative flex justify-center md:justify-start mt-20">
              {/* Static Ellipse */}
              <Image
                alt="Ellipse"
                src={"/HomePage/Ellipse.png"}
                width={250}
                height={250}
                className="relative z-10 w-[150px] sm:w-[180px] md:w-[200px]"
              />

              {/* Animated Star */}
              <motion.img
                src={Star.src}
                alt="Star"
                animate={{
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[18%] md:top-[25%] left-[75%] -translate-x-[50%] xl:left-[40%]  md:left-[70%] lg:left-[50%] -translate-y-[50%] w-[130px] sm:w-[100px] md:w-[170px]"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="title">
              Grow, create, and lead with BoostFixter
            </h1>

            <p className="description ">
              Choose BoostFixter to embrace your skills and passion. We are your
              growth partner, encouraging creativity and individual development
              while creating excellent user experiences in a fast-paced,
              collaborative atmosphere.
            </p>

            <div className="flex justify-center md:justify-start">
              <CustomButton text={"Join Our Team"} link={"#"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
