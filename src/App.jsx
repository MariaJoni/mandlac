import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/header";
import Details from "./pages/details";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Footer from "./pages/footer";
import Blog from "./pages/blog";
import MenuContact from "./pages/menuContact";
import Industries from "./pages/industries";
import Services from "./pages/services";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-full w- overflow-x-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Industries/:sector" element={<Industries />} />
          <Route path="/Services/:sector" element={<Services />} />
          <Route path="/menuContact" element={<MenuContact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
