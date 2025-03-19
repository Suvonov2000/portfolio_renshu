import { Link } from "react-router-dom";
import { Button } from "antd";
import { useState } from "react";

const Nav = () => {
  return (
    <div className="w-[50%] h-[100px] flex items-center m-auto">
      <div className="w-full flex items-center gap-[50px] ">
        <Link to="/" className="text-[20px] text-semibold hover:underline">
          <b>About</b>
        </Link>
        <Link to="/blog" className="text-[20px] text-semibold hover:underline">
          <b>Blog</b>
        </Link>
        <Link
          to="dashboard"
          className="text-[20px] text-semibold hover:underline"
        >
          <b> Dashboard</b>
        </Link>
        <Link to="resume" className="text-[20px] text-semibold hover:underline">
          <b>Resume</b>
        </Link>
      </div>
      <Button></Button>
    </div>
  );
};

export default Nav;
