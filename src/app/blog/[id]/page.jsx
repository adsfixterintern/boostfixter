"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import LatestBlog from "@/app/components/Home/LatestBlogsSection";
export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  console.log("Blog ID from URL:", params.id);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((b) => b.id === Number(params.id));
        setBlog(foundBlog || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading blog:", error);
        setLoading(false);
      });
  }, [params.id]);

  const scrollToSection = (subtitle, index) => {
    const sectionId = `section-${index}`;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(subtitle);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-lg text-gray-500">Loading blog post...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
        <p className="text-lg text-gray-500">Blog post not found</p>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 transition border rounded-md hover:bg-gray-100"
        >
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-8 mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <h1 className="title">{blog.title}</h1>
      </div>

      {/* ✅ Sticky Fixed Properly */}
      <div className="relative grid items-start grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Sidebar */}
       <aside className="order-2 lg:order-1 lg:col-span-4">
  <div className="space-y-6 lg:sticky lg:top-24 ">
    <div className="p-6 rounded-lg shadow-sm bg-gray-50">
      <h2 className="mb-4 text-xl font-bold text-[#676E72] md:text-2xl">
        Table of Contents
      </h2>

      <nav className="space-y-2">
        {blog.subtitles.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(section.subtitle, index)}
            className={`block w-full text-left text-lg px-3 py-2 rounded transition ${
              activeSection === section.subtitle
                ? "bg-[#02644F] text-[#E7FF23] font-semibold"
                : "hover:bg-gray-200 text-gray-700 hover:text-black"
            }`}
          >
            {section.subtitle}
          </button>
        ))}
      </nav>
    </div>

    <div className="flex items-center justify-center gap-4">
      <button className="px-4 py-2 rounded-full transition bg-[#02644F] text-[#E7FF23] font-semibold hover:bg-gray-200 hover:text-black text-xl">
        Share
      </button>

      <a
        href="#"
        className="flex items-center justify-center w-8 h-8 bg-[#013F32] rounded-full hover:bg-green-700"
      >
        <FaFacebookF className="w-4 h-4 text-white" />
      </a>
      <a
        href="#"
        className="flex items-center justify-center w-8 h-8 bg-[#013F32] rounded-full hover:bg-green-700"
      >
        <FaLinkedinIn className="w-4 h-4 text-white" />
      </a>
      <a
        href="#"
        className="flex items-center justify-center w-8 h-8 bg-[#013F32] rounded-full hover:bg-green-700"
      >
        <FaInstagram className="w-4 h-4 text-white" />
      </a>
      <a
        href="#"
        className="flex items-center justify-center w-8 h-8 bg-[#013F32] rounded-full hover:bg-green-700"
      >
        <FaYoutube className="w-4 h-4 text-white" />
      </a>
    </div>
  </div>
</aside>


        {/* Main Blog Content */}
        <article className="order-1 lg:order-2 lg:col-span-8">
          <div className="space-y-12">
            <div className="flex flex-wrap justify-between gap-6 pb-4 mb-4 border-b">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 overflow-hidden rounded-full">
                  <Image
                    src={blog.authorImage || "/placeholder.svg"}
                    alt={blog.authorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold md:text-lg text-[#353E43]">
                    {blog.authorName}
                  </p>
                  <p className="text-xs text-gray-500">{blog.authorRole}</p>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                <p className="font-medium">Publish Date</p>
                <p className="text-lg font-bold text-[#676E72] md:text-xl">
                  {blog.date}
                </p>
              </div>
            </div>

            {blog.subtitles.map((section, index) => (
              <section
                key={index}
                id={`section-${index}`}
                className="scroll-mt-20"
              >
                <h2 className="title">{section.subtitle}</h2>

                <p className="py-8 description">{section.description}</p>

                {section.image && (
                  <div className="w-full mb-6 overflow-hidden aspect-video rounded-4xl">
                    <img
                      src={section.image}
                      alt={section.subtitle}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>
      </div>


    <div>

      <LatestBlog></LatestBlog>
    </div>
    </div>
  )
}
