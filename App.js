import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/contact"; // Fixed import case
import Login from "./components/Login"; // Added Login Page
import './index.css';

function App() {
  return (
    <Router>
      {/* Navbar stays visible on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> {/* Added Login Route */}
      </Routes>
    </Router>
  );
}

export default App;
