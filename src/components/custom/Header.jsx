import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-5 md:px-0">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" width="40" />{" "}
          <span className="text-2xl font-semibold">JustFly</span>
        </Link>

        {/* Mobile Hamburger Icon */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Button className="hover:bg-purple-600 transition-all">
            Sign In
          </Button>
          <Button className="hover:bg-purple-600 transition-all">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-purple-800">
          <Button className="w-10/12">Sign In</Button>
          <Button className="w-10/12">Sign Up</Button>
        </div>
      )}
    </nav>
  );
};

export default Header;
