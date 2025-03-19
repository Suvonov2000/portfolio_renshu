import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-[full] h-[200px]  flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-[50px] text-semibold">Abduvoitov.</h1>
      </div>
      <div className=" flex-1 flex items-center justify-end gap-[50px]">
        <Link to="/about" className="text-[30px] text-semibold">
          About
        </Link>
        <Link to="/blog" className="text-[30px] text-semibold">
          Blog
        </Link>
        <Link to="/dashboard" className="text-[30px] text-semibold">
          Dashboard
        </Link>
        <Link to="/resume" className="text-[30px] text-semibold">
          Resume
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
