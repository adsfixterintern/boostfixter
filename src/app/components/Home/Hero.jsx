"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "../Shared/AnimatedButton";
import CustomButton from "../Shared/CustomButton";

export default function Hero() {

  return (
    <section className="relative py-16 overflow-hidden bg-linear-to-br from-gray-100 via-white to-white sm:py-20 lg:py-24">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row lg:gap-24">
          {/* ---------- LEFT CONTENT ---------- */}
          <div className="z-10 w-full space-y-6 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-primary sm:text-3xl md:text-5xl lg:text-6xl">
              Leading AI-Powered Global Digital Growth Marketing Agency
            </h1>

            <p className="mx-auto text-base text-gray-600 sm:text-lg md:text-xl md:mx-0 md:w-11/12">
              Bangladesh&apos;s top digital marketing agency. Innovative
              strategies that drive online success and business growth.
            </p>

            {/* Buttons */}
            <div  className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row md:justify-start">
              <AnimatedButton id="freeConsultation"  text="Free Consultation" scrollToId="freeConsultation" />
              <CustomButton text="Portfolio" link="#" />
            </div>
          </div>

          {/* ---------- RIGHT CONTENT ---------- */}
          <div className="relative flex justify-center w-full md:w-1/2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-90 md:h-90 lg:w-100 lg:h-100">
              {/* Image 1 */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  rotate: [0, 6, -6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/HomePage/Icon_1st-Part.png"
                  fill
                  alt="BoostFixter Icon 1"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Image 2 */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                  rotate: [0, -10, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/HomePage/Icon_2nd-Part.png"
                  fill
                  alt="BoostFixter Icon 2"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
