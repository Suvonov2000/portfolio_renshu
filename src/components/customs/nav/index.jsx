import { Link } from "react-router-dom";
import { Button } from "antd";

const Nav = () => {
  return (
    <div className="w-[50%] h-[100px] flex items-center m-auto">
      <div className="w-full flex items-center gap-[50px] ">
        <Link to="/about" className="text-[20px] font-semibold hover:underline">
          About
        </Link>
        <Link to="/blogs" className="text-[20px] font-semibold hover:underline">
          Blogs
        </Link>
        <Link
          to="/dashboard"
          className="text-[20px] font-semibold hover:underline"
        >
          Dashboard
        </Link>
        <Link
          to="/resume"
          className="text-[20px] font-semibold hover:underline"
        >
          Resume
        </Link>
      </div>
      <Button></Button>
    </div>
  );
};

export default Nav;
