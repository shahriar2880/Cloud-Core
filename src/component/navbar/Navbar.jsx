import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navlinks = [
    { href: "/", label: "Home" },
    { href: "products", label: "Products" },
    { href: "about", label: "About Us" }
  ];

  return (
    <nav 
    className="fixed z-1000 top-0 left-0 right-0 bg-white/90 shadow-sm backdrop-blur-sm border-b border-gray-200">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <a href="#" className="flex items-center gap-1 cursor-pointer">
          <div className="flex items-center gap-1 animate-pulse">
            <div className="w-6 h-6 bg-blue-700 rounded-full opacity-70 hover:opacity-100 transition-opacity"></div>
            <div className="w-6 h-6 -ml-4 bg-red-700 rounded-full opacity-100 hover:opacity-70 transition-opacity"></div>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <span className=" text-xl font-bold text-gray-700">Cloud</span>
            <span className=" text-xl font-bold text-gray-500">Core</span>
          </div>
        </a>

        {/* mobile menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
        {/* desktop navitems */}

        <div className="hidden md:flex items-center gap-8">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-700 after:w-full"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* get in touch */}

        <button className="hidden md:block bg-blue-700 text-white px-2 py-3 rounded-sm hover:bg-blue-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <a
            href="#newsletter"
            className=""
          >
            Get in Touch
          </a>
        </button>
      </div>

      {/* mobile menu items */}

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-4 bg-white p-4 shadow-sm rounded-sm">
          <div className="container mx-auto px-4 space-y-3">
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`block text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                  activeLink === link.href
                    ? "text-blue-700 after:w-full"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}

            {/* get in touch */}

            <button className="w-full md:block bg-blue-700 text-white px-1 py-3 rounded-lg hover:bg-blue-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
              <a href="#newsletter" className="">
                Get in Touch
              </a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
