import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainContainer from "./components/layout/MainContainer";


function App() {
  return (
    <Router>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;
