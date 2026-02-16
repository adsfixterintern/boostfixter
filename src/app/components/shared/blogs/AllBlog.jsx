"use client";
import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};
const CATEGORIES = [
  "All",
  "Digital Marketing",
  "Design",
  "Web Development",
  "Cyber Security",
];
const POSTS_PER_PAGE = 6;
export default function AllBlog() {
  const router = useRouter();
      const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading blogs:", error);
        setLoading(false);
      });
  }, []);
//   console.log(blogPosts);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  function goToNextPage() {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  }

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }

  function onCategoryChange(category) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  if (loading) {
    return (
    <div className="">
      <main className="px-4 py-16 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="pb-4 title">The BoostFixer Blog</h1>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`rounded-full px-4 py-2 border font-semibold flex items-center gap-1 ${
                  selectedCategory === category
                    ? "bg-[#02644F] text-[#E7FF23]"
                    : "border-primary text-primary"
                }`}
                type="button"
              >
                {category === "All" ? "Latest Blog" : category}
                <ArrowRight
                  className="w-6 h-6"
                  style={{ transform: "rotate(-40deg)" }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <motion.div
              key={post.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="px-4 py-6 overflow-hidden transition-shadow duration-300 cursor-pointer rounded-4xl group hover:shadow-lg"
              onClick={() => router.push(`/blog/${post.id}`)}
            >
              <div className="relative w-full h-56 overflow-hidden rounded-xl">
                <Image
                  src={post.image || "/placeholder.svg?height=224&width=400"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full">
                    <Image
                      src={
                        post.authorImage || "/placeholder.svg?height=48&width=48"
                      }
                      alt={post.authorName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="subtitle">{post.authorName}</h4>
                    <p className="text-xs text-gray-500">{post.authorRole}</p>
                  </div>
                </div>

                <p className="mb-2 text-xs text-gray-400">{post.date}</p>

                <h3 className="description">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`rounded-full px-4 py-2 border font-semibold flex items-center gap-1 ${
              currentPage === 1
                ? "text-primary cursor-not-allowed border-primary"
                : "bg-[#02644F] text-[#E7FF23] border-[#02644F] hover:bg-[#035e43] transition-colors"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
            Previous
          </button>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`rounded-full px-4 py-2 border font-semibold flex items-center gap-1 ${
              currentPage === totalPages
                ? "text-primary cursor-not-allowed border-primary"
                : "bg-[#02644F] text-[#E7FF23] border-[#02644F] hover:bg-[#035e43] transition-colors"
            }`}
          >
            Next
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No blog posts found in this category.
            </p>
          </div>
        )}
      </main>
    </div>
    );
  }
  return (
    <div className="">
      <main className="px-4 py-16 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="pb-4 title">The BoostFixer Blog</h1>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`rounded-full px-4 py-2 border font-semibold flex items-center gap-1 ${
                  selectedCategory === category
                    ? "bg-[#02644F] text-[#E7FF23]"
                    : "border-primary text-primary"
                }`}
                type="button"
              >
                {category === "All" ? "Latest Blog" : category}
                <ArrowRight
                  className="w-6 h-6"
                  style={{ transform: "rotate(-40deg)" }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <motion.div
              key={post.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="px-4 py-6 overflow-hidden transition-shadow duration-300 cursor-pointer rounded-4xl group hover:shadow-lg"
              onClick={() => router.push(`/blog/${post.id}`)}
            >
              <div className="relative w-full h-56 overflow-hidden rounded-xl">
                <Image
                  src={post.image || "/placeholder.svg?height=224&width=400"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full">
                    <Image
                      src={
                        post.authorImage || "/placeholder.svg?height=48&width=48"
                      }
                      alt={post.authorName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="subtitle">{post.authorName}</h4>
                    <p className="text-xs text-gray-500">{post.authorRole}</p>
                  </div>
                </div>

                <p className="mb-2 text-xs text-gray-400">{post.date}</p>

                <h3 className="description">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`rounded-full px-4 py-2 border font-semibold flex items-center gap-1 ${
              currentPage === 1
                ? "text-primary cursor-not-allowed border-primary"
                : "bg-[#02644F] text-[#E7FF23] border-[#02644F] hover:bg-[#035e43] transition-colors"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
            Previous
          </button>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`rounded-full px-4 py-2 border font-semibold flex items-center gap-1 ${
              currentPage === totalPages
                ? "text-primary cursor-not-allowed border-primary"
                : "bg-[#02644F] text-[#E7FF23] border-[#02644F] hover:bg-[#035e43] transition-colors"
            }`}
          >
            Next
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No blog posts found in this category.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
