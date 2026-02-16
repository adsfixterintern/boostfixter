"use client";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Download,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import CustomButton from "./CustomButton";
import AnimatedButton from "./AnimatedButton";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const navLinks = [
  { label: "About Us", url: "/about" },
  { label: "Portfolio", url: "/portfolio" },
  { label: "Our Team", url: "/team" },
  { label: "Career", url: "/career" },
  { label: "Blog", url: "/blog" },
];

  return (
    <div className="flex flex-col">
      <footer className="bg-[#F8F8F8] pt-10 pb-4">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* ===== Grid Section ===== */}
          <div className="grid grid-cols-2 gap-8 mb-4 md:grid-cols-4 lg:grid-cols-12 lg:gap-12">
            {/* Brand Section */}
            <div className="col-span-2 lg:col-span-4 md:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center mb-4 rounded-lg">
                  <img
                    src="/BoostFixter_Website.png"
                    alt="BoostFixter Logo"
                    className=""
                  />
                </div>
              </Link>
              <p
                className="text-sm           
    sm:text-base     
    md:text-lg       
    font-normal md:font-semibold 
    text-[#013F32]
    hover:text-[#031d17]
    transition-colors duration-300 
    break-all     "
              >
                Global ad solutions built for growth fast, secure, and
                performance-driven.
              </p>
              <div className="mt-5 max-w-2/3">
               <AnimatedButton text="Contact Us" scrollToId="freeConsultation"></AnimatedButton>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 lg:col-span-3 md:col-span-1">
              <h3 className="text-lg md:text-xl mb-3 font-bold text-[#013F32]">
                Quick Links
              </h3>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className=" text-sm
        sm:text-base
        md:text-lg
        font-normal md:font-semibold
        text-[#013F32]
        hover:text-[#031d17]
        transition-colors duration-300
        break-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div className="col-span-1 lg:col-span-5 md:col-span-1">
              <h3 className="mb-3 text-lg md:text-xl font-bold text-[#013F32]">
                Contacts
              </h3>
              <div className="space-y-2">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-[#013F32] mt-1 flex-shrink-0" />
                  <a
                    href="tel:+8801953825344"
                    className=" text-sm           
    sm:text-base     
    md:text-lg       
    font-normal md:font-semibold 
    text-[#013F32]
    hover:text-[#031d17]
    transition-colors duration-300 
    break-all     "
                  >
                    +8801953-825344
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-[#013F32] mt-1 flex-shrink-0" />
                  <a
                    href="mailto:boostfixter@gmail.com"
                    className="
    text-sm           
    sm:text-base     
    md:text-lg       
    font-normal md:font-semibold 
    text-[#013F32]
    hover:text-[#031d17]
    transition-colors duration-300 
    break-all         
  "
                  >
                    boostfixter@gmail.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#013F32] mt-1 flex-shrink-0" />
                  <p
                    className=" text-sm           
    sm:text-base     
    md:text-lg       
    font-normal md:font-semibold 
    text-[#013F32]
    hover:text-[#031d17]
    transition-colors duration-300 
    break-all     "
                  >
                    Rafiq Place, Level 5C, Opposite. <br /> BM College Mosque
                    Gate, Barisal, Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Bottom Section ===== */}
          <div className="mt-10 space-y-2">
            <div className="flex flex-row-reverse flex-wrap items-center justify-between gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 bg-[#013F32] rounded-full hover:bg-green-700"
                >
                  <FaFacebookF className="w-5 h-5 text-secondary" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 bg-[#013F32] rounded-full hover:bg-green-700"
                >
                  <FaLinkedinIn className="w-5 h-5 text-secondary" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 bg-[#013F32] rounded-full hover:bg-green-700"
                >
                  <FaInstagram className="w-5 h-5 text-secondary" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 bg-[#013F32] rounded-full hover:bg-green-700"
                >
                  <FaYoutube className="w-5 h-5 text-secondary" />
                </a>
              </div>
              {/* Company Deck Download */}
              <a
                href="#"
                className="flex items-center gap-3 mb-4 transition-colors text-primary"
              >
                <div className="flex items-center justify-center text-secondary p-2 rounded-full bg-[#013F32]">
                  <Download size={36} />
                </div>
                <div className="text-start">
                  <div className="text-sm font-semibold md:text-md lg:text-lg">
                    Company Deck
                  </div>
                  <div className="text-xs opacity-90">PDF, 3 MB</div>
                </div>
              </a>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#013F32] md:flex-row">
              <p>© 2025 BoostFixter. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="transition-colors hover:text-green-700">
                  Privacy Policy
                </a>
                <a href="#" className="transition-colors hover:text-green-700">
                  Terms of Service
                </a>
                <a href="#" className="transition-colors hover:text-green-700">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
