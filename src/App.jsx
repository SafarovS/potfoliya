import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Resume from './pages/resume.jsx';
import Serveces from './pages/Serveces.jsx';
import Portfoliya from './pages/Portfoliya.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Serveces />} />
          <Route path="/portfolio" element={<Portfoliya />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
