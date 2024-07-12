import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './pages/header'
import Details from './pages/details'
import Hospitality from './pages/hospitality'
import Contact from './pages/contact'
import Home from './pages/home';
import Footer from './pages/footer';
import Blog from './pages/blog';
import MenuContact from './pages/menuContact';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className=''>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/hospitality" element={<Hospitality />} />
            <Route path='/menuContact' element={<MenuContact />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  )
}

export default App
