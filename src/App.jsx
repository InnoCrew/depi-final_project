import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css"
import './App.css'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Blogs from "./pages/blogs/Blogs";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
