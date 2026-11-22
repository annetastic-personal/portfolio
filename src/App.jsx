import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainContainer from "./components/layout/MainContainer";
import About from "./pages/About";
import SiteHeader from "./components/layout/SiteHeader";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import SiteFooter from "./components/layout/SiteFooter";

function App() {
  return (
    <Router>
      {/* Skip link: first focusable element so keyboard and screen-reader users can jump past the header straight to the main content. */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <MainContainer>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectSlug" element={<ProjectDetails />} />
        </Routes>
      </MainContainer>
      <SiteFooter />
    </Router>
  );
}

export default App;
