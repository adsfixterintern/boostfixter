"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HomeReviw() {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <div ref={ref} className="pb-20 bg-white">
      <div className="grid grid-cols-1 gap-4 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="mb-2 text-4xl text-gray-400">01</p>
          <div className="mt-20">
            <h3 className="mb-6 text-3xl font-semibold text-gray-400">
              Projects Completed
            </h3>
            <p className="text-2xl font-bold text-primary sm:text-3xl lg:text-5xl">
              <CountUp start={0} end={inView ? 100 : 0} duration={3} redraw={true} /> +
            </p>
          </div>
        </div>

        {/* 2 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="mb-2 text-4xl text-gray-400">02</p>
          <div className="mt-20">
            <h3 className="mb-6 text-3xl font-semibold text-gray-400">
              Happy <br /> Clients
            </h3>
            <p className="text-2xl font-bold text-primary sm:text-3xl lg:text-5xl">
              <CountUp start={0} end={inView ? 95 : 0} duration={3} redraw={true} /> %
            </p>
          </div>
        </div>

        {/* 3 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="mb-2 text-4xl text-gray-400">03</p>
          <div className="mt-20">
            <h3 className="mb-6 text-3xl font-semibold text-gray-400">
              Years of <br /> Services
            </h3>
            <p className="text-2xl font-bold text-primary sm:text-3xl lg:text-5xl">
              <CountUp start={0} end={inView ? 3 : 0} duration={2} redraw={true} /> +
            </p>
          </div>
        </div>

        {/* 4 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="mb-2 text-4xl text-gray-400">04</p>
          <div className="mt-20">
            <h3 className="mb-6 text-3xl font-semibold text-gray-400">
              Team <br /> Members
            </h3>
            <p className="text-2xl font-bold text-primary sm:text-3xl lg:text-5xl">
              <CountUp start={0} end={inView ? 20 : 0} duration={2.5} redraw={true} /> +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
