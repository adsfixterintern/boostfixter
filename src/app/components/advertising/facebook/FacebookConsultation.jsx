import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "../../../components/shared/AnimatedButton";


export default function FacebookConsultation() {
  return (
    <section className="py-16 mb-16 bg-[#F8F8F8]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Left Text Section */}
          <div className="w-full space-y-6 md:w-2/5">
            <h2 className="title">
             Ready to Grow?
            </h2>
            <p className="description">
              Let's discuss your business and plan your first campaign together.
            </p>

            {/* Avatar Section */}
            <div className="flex items-center gap-4 p-4l w-fit">
              <div className="w-16 h-16 overflow-hidden rounded-full">
                <img
                  src="/About/Abdul-Kadir.png"
                  alt="Manager"
                  className="object-cover w-full h-full "
                />
              </div>
              <div>
                <h3 className="subtitle">
                  Abdul Kadir
                </h3>
                <p className="text-sm text-gray-500">Technical Support Officer</p>
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
