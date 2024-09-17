import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-4 shadow-sm bg-purple-700 text-white">
      <div className="flex justify-between w-full md:w-5/6 m-auto cursor-pointer">
          <Link to={'/'}>
        <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" width={"40"} />{" "}
            <span className="text-2xl font-semibold">JustFly</span>
        </div>
          </Link>
        <div className="flex gap-2">
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
