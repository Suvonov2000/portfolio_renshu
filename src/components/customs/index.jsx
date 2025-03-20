import { Route, Routes } from "react-router-dom";
import About from "./About";
import Blog from "./blog";
import Dashboard from "./dashboard";
import Resume from "./resume";
import Nav from "./nav";
import Social_medias from "./smedias";

const All = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Social_medias />
    </div>
  );
};

export default All;
