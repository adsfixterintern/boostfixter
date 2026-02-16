"use client";

import { ArrowUpRight } from "lucide-react";
import "./AnimatedButton.css";
import Link from "next/link";

function AnimatedButton({ text = "Get Started",  scrollToId,  className = "" }) {

  const handleClick = () => {
    if (scrollToId) {
      const section = document.getElementById(scrollToId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <button 
      onClick={handleClick}
      className={`relative px-8 py-3 font-semibold text-white rounded-full overflow-hidden group transition-all duration-300 ${className} animated-button`}
    >
      {/* Animated Effects */}
      <div className="absolute inset-0 animated-button-shimmer" />
      <div className="absolute inset-0 animated-button-glow" />

      {/* Spark Particles */}
      <div
        className="absolute w-1 h-1 rounded-full animated-button-particle"
        style={{ left: "20%", top: "50%" }}
      />
      <div
        className="absolute w-1 h-1 rounded-full animated-button-particle"
        style={{ left: "40%", top: "30%" }}
      />
      <div
        className="absolute w-1 h-1 rounded-full animated-button-particle"
        style={{ left: "60%", top: "70%" }}
      />
      <div
        className="absolute w-1 h-1 rounded-full animated-button-particle"
        style={{ left: "80%", top: "40%" }}
      />

      {/* Button Text + Arrow */}
      <span className="relative z-10 text-[#E7FF24] flex items-center justify-center gap-2 animated-button-content">
        {text}
        <ArrowUpRight />
      </span>
    </button>
  );
}

export default AnimatedButton;
