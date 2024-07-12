import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/header";
import Details from "./pages/details";
import Hospitality from "./pages/hospitality";
import Home from "./pages/home";
import Footer from "./pages/footer";
import Blog from "./pages/blog";
import MenuContact from "./pages/MenuContact";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-full">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/menuContact" element={<MenuContact />} />
          <Route path="/hospitality" element={<Hospitality />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
