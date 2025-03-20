// import Main from "./components/main";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/customs/nav";
import Social_medias from "./components/customs/smedias";
import About from "./components/About";
import Dashboard from "./components/dashboard";
import Resume from "./components/resume";
import Blogs from "./components/blogs";
import Blog from "./components/blogs/blog";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blog_id" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Social_medias />
    </div>
  );
}

export default App;
