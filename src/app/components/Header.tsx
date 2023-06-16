"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-gray-800 text-white py-4">
      <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-8">
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-lg">
            Logo
          </a>
          <div className="flex md:hidden ml-4">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`space-x-4 md:flex  items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link href="/" className={pathname == "/" ? "text-blue-600" : ""}>
            Home
          </Link>
          <Link
            href="/about"
            className={pathname == "/about" ? "text-blue-600" : ""}
          >
            About
          </Link>
          <Link
            href="/services"
            className={pathname == "/services" ? "text-blue-600" : ""}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={pathname == "/contact" ? "text-blue-600" : ""}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
