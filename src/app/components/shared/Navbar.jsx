"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use this instead of useRouter

export default function Navbar() {
  const pathname = usePathname(); // Get the current path
  console.log("Amar Pathname holo:", pathname);
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
        { href: "/advertising/tiktok", label: "TikTok" },
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
      links: [{ href: "/about/team", label: "Our Team" }],
    },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  // Helper function to check if link is active
  const isActive = (path) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
        <div className="flex items-center shadow-md px-4 rounded-xl justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/BoostFixter_Website.png"
              alt="Logo"
              className="w-auto h-8"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="items-center hidden gap-8 md:flex">
            {navItems.map((item, index) => {
              const active = isActive(item.href);

              return item.links ? (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 font-medium transition text-[#02644F] ${
                      active ? "underline underline-offset-4" : ""
                    }`}
                  >
                    {item.label} <ChevronDown size={16} />
                  </Link>

                  
           
                  {/* Desktop Menu */}
                  <div className="absolute left-0 invisible pt-4 transition-all duration-200 opacity-0 w-52 group-hover:opacity-100 group-hover:visible top-full">
                    {/* set white bgcolor */}
                    <div className="bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
                      {item.links.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          className={`block px-4 py-3 transition hover:bg-gray-50 hover:text-[#02644F] ${
                            pathname === sub.href
                              ? "underline underline-offset-4"
                              : "text-[#02644F]"
                          } ${i !== 0 ? "border-t border-gray-50" : ""}`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-1 font-medium transition text-[#02644F] ${
                    active ? "underline underline-offset-4" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          {/* Mobile Toggle */}
          <button
            className="text-gray-700 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile button logic remains the same... */}
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
