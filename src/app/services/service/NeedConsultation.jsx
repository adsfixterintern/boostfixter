import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "../../components/shared/AnimatedButton";
import Image from "next/image";

export default function NeedConsultation() {
  return (
    <section className="py-16 mb-16 bg-[#F8F8F8]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Left Text Section */}
          <div className="w-full space-y-6 md:w-2/5">
            <h2 className="title">
              Planning <br></br> Something Big?
            </h2>
            <p className="description">
              Discuss your idea on a call. After discovery, we&apos;ll propose a
              tailored plan for your project.
            </p>

            {/* Avatar Section */}
            <div className="flex items-center gap-4 p-4l w-fit">
              <div className="w-16 h-16 overflow-hidden rounded-full relative">
                <Image
                  src="/About/Md-Shobuj-Hosen.png"
                  alt="Manager"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="subtitle">Md Shobuj Hosen</h3>
                <p className="text-sm text-gray-500">Chief Technical Manager</p>
              </div>
            </div>

            {/* Call Link */}
            <div className="flex items-center gap-0 mt-6 text-green-800 underline tex-2t-lg font-sgemibold md:text-xl">
              <a href="#" className="text-green-800 ">
                Direct Call{" "}
              </a>
              <ArrowUpRight />
            </div>
          </div>

          {/* Right Form Section */}
          <form className="w-full p-8 space-y-6 bg-white md:w-3/5 rounded-2xl">
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-3 border-b-2 border-gray-200 md:w-1/2 focus:border-green-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full py-3 border-b-2 border-gray-200 md:w-1/2 focus:border-green-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full py-3 border-b-2 border-gray-200 md:w-1/2 focus:border-green-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-3 border-b-2 border-gray-200 md:w-1/2 focus:border-green-500 focus:outline-none"
              />
            </div>

            <textarea
              placeholder="Project Details"
              rows="4"
              className="w-full py-3 border-b-2 border-gray-200 resize-none focus:border-green-500 focus:outline-none"
            ></textarea>

            <div>
              <AnimatedButton text="Send Inquiry" link="#" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
