"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomButton from "../Shared/CustomButton";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    author: "Md Millon Hossen",
    authorRole: "Founder & CEO",
    date: "October 10, 2024",
    title: "Optimize Title Tags and Meta Descriptions for Success",
    image: "/blog/blog1.png",
    authorImage: "/HomePage/milon.jpg",
  },
  {
    author: "Omor Faruk",
    authorRole: "Full Stack Developer",
    date: "October 14, 2024",
    title: "Minimum Lovable Product From Planning to Execution",
    image: "/blog/blog2.webp",
    authorImage: "/HomePage/faruk.jpg",
  },
  {
    author: "Mosaraf Hossen",
    authorRole: "Full Stack Developer",
    date: "October 14, 2024",
    title: "Minimum Lovable Product From Planning to Execution",
    image: "/blog/blog4.webp",
    authorImage: "/HomePage/mosaraf.jpg",
  },
  {
    author: "Shaharior Islam",
    authorRole: "UI/UX Designer",
    date: "October 16, 2024",
    title: "UX Metrics What You Should Measure and Why",
    image: "/blog/blog3.png",
    authorImage: "/HomePage/shaharior.jpg",
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

export default function LatestBlog() {
  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between gap-6 mb-10 sm:flex-row">
          <h2 className=" title">
            Our Latest Blog
          </h2>
          <CustomButton text={"See All Blogs"} link={"/blog"} />
        </div>

        {/* Blog Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative overflow-hidden bg-[#F8F8F8] transition-all duration-600 rounded-2xl group hover:-translate-y-2"
            >
              {/* Blog Image */}
              <div className="relative w-full h-52">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100"></div>
              </div>

              {/* Blog Info */}
              <div className="relative z-10 p-6">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full">
                    <Image
                      src={blog.authorImage}
                      alt={blog.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {blog.author}
                    </h4>
                    <p className="text-xs text-gray-500">{blog.authorRole}</p>
                  </div>
                </div>

                {/* Date */}
                <p className="mb-2 text-xs text-gray-400">{blog.date}</p>

                {/* Title */}
                <h3 className="description">
                  {blog.title}
                </h3>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-sm font-medium transition-all duration-300 text-primary group-hover:gap-3 hover:text-accent">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
