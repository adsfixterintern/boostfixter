"use client";
import React from "react";
import CustomButton from "../Shared/CustomButton";
import { motion } from "framer-motion";
import Image from "next/image";
import Star from "../../../../public/HomePage/Star.png";

export default function OurStory() {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              Our Story
            </h2>

            {/* IMAGE SECTION */}
            <div className="relative flex justify-center mt-10 md:justify-start">
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
            <h1 className="space-x-0 text-2xl font-bold text-primary sm:text-3xl lg:text-5xl">
              We're a Results-Driven <br className="hidden sm:block" />
              Digital Marketing Agency
            </h1>

            <p className="description">
              Established in 2023, BoostFixter empowers businesses with
              AI-powered digital marketing strategies and innovative solutions
              that drive growth and measurable results.
            </p>

            <div className="flex justify-center md:justify-start">
              <CustomButton text={"View Details"} link={"#"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
