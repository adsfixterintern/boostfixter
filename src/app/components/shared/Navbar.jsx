"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Advertising",
      href: "/advertising",
      name: "advertising",
      links: [
        { href: "/advertising/facebook", label: "Facebook" },
        { href: "/advertising/tikTok", label: "TikTok" },
        { href: "/advertising/google", label: "Google" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      name: "services",
    },
    {
      label: "About Us",
      href: "/about",
      name: "about",
       links: [
     
         { href: "/about/team", label: "Our Team" },
     
       ],
    },
    // { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
     { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/BoostFixter_Website.png"
              alt="BoostFixter Logo"
              className="w-auto h-8"
            />
          </Link>
          {/* Desktop Menu */}
          <nav className="items-center hidden gap-8 md:flex">
            {navItems.map((item, index) =>
              item.links ? (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 font-medium transition text-primary hover:text-accent"
                  >
                    {item.label} <ChevronDown size={16} />
                  </Link>
                  <div className="absolute left-0 invisible mt-2 transition-all duration-200 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 w-52 group-hover:opacity-100 group-hover:visible">
                    {item.links.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className={`block px-4 py-2 text-primary transition hover:text-accent hover:bg-gray-50 ${
                          i !== 0 ? "border-t" : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="font-medium transition text-primary hover:text-accent"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="text-gray-700 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="py-4 bg-white border-t border-gray-200 shadow-sm md:hidden">
            {navItems.map((item, index) => (
              <div key={index} className="px-4">
                {item.links ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full py-2 font-medium text-primary hover:text-accent"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex-1 text-left"
                      >
                        {item.label}
                      </Link>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4">
                        {item.links.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.href}
                            className="block py-1 text-gray-600 hover:text-accent"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 font-medium text-primary hover:text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
