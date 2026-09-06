import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DesignGuide from "./components/DesignGuide";
import Home from "./pages/Home";
import MainContainer from "./components/layout/MainContainer";


function App() {
  return (
    <Router>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design-guide" element={<DesignGuide />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;
