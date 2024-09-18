import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaMapMarkedAlt } from "react-icons/fa"; // Trip icon
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and close icons

const Header = ({ setDialog }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = localStorage.getItem("user");
   
  const userLogout = () => {
    localStorage.removeItem("user");
    location.reload()
  };
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-700 bg-opacity-90 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="w-10 h-10 object-cover rounded-full shadow-md"
          />
          <span className="text-2xl font-bold text-white tracking-wide">
            JustFly
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* Google Sign-In Button */}
          {user ? (
            <Link
              to="/all-trip"
              className="flex items-center bg-white text-gray-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              Your All Trip
            </Link>
          ) : (
            <button
              className="flex items-center bg-white text-gray-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
              onClick={() => setDialog(true)}
            >
              <FcGoogle className="mr-2 text-2xl" />
              Google Sign In
            </button>
          )}

          {/* Create Trip Button */}
          <Link to="/create-trip">
            <button className="flex items-center bg-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-purple-500 transition-transform transform hover:scale-105">
              <FaMapMarkedAlt className="mr-2 text-lg" />
              Create Trip
            </button>
          </Link>
          {/* Create Trip Button */}
          {user ? (
            <button
              className="flex items-center bg-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-purple-500 transition-transform transform hover:scale-105"
              onClick={userLogout}
            >
              Logout
            </button>
          ) : (
            ""
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-6 bg-purple-700 bg-opacity-95">
          {/* Google Sign-In Button */}
          {user ? (
            <Link
              to="/all-trip"
              className="flex items-center bg-white text-gray-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              Your All Trip
            </Link>
          ) : (
            <button
              className="flex items-center bg-white text-gray-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
              onClick={() => setDialog(true)}
            >
              <FcGoogle className="mr-2 text-2xl" />
              Google Sign In
            </button>
          )}
          {/* Create Trip Button */}
          <Link to="/create-trip">
            <button className="flex items-center bg-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-purple-500 transition-transform transform hover:scale-105">
              <FaMapMarkedAlt className="mr-2 text-lg" />
              Create Trip
            </button>
          </Link>
          {user ? (
            <button
              className="flex items-center bg-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-purple-500 transition-transform transform hover:scale-105"
              onClick={userLogout}
            >
              Logout
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
