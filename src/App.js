import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Home from "./page/Home";
import Footer from "./ui/Footer";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
