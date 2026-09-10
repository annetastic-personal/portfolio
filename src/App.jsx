import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainContainer from "./components/layout/MainContainer";
import About from "./pages/About";
import SiteHeader from "./components/layout/SiteHeader";
import ProjectDetails from "./pages/ProjectDetails";
import SiteFooter from "./components/layout/SiteFooter";

function App() {
  return (
    <Router>
      <MainContainer>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:projectSlug" element={<ProjectDetails />} />
        </Routes>
      </MainContainer>
      <SiteFooter />
    </Router>
  );
}

export default App;
