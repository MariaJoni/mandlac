  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Header from "./pages/header";
  import Home from "./pages/home";
  import Footer from "./pages/footer";
  import Blog from "./pages/blog";
  import Industries from "./pages/industries";
  import Services from "./pages/services";
  import Contact from "./pages/contact";
import OverView from "./pages/overview";
import AboutSector from "./pages/aboutSector";

  function App() {
    return (
      <div className="h-screen w-full overflow-x-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Industries/:sector" element={<Industries />} />
            <Route path="/Services/:sector" element={<Services />} />
            <Route path="/AboutUs/:sector" element={<AboutSector />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/SectorOverview" element={<OverView/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }

  export default App;
