"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-gray-800 text-white py-4">
      <nav className="flex justify-between items-center py-4 px-8">
        <a href="/" className="text-white font-bold text-lg">
          Logo
        </a>
        <div className="flex items-center space-x-4">
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
