import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full flex justify-between items-center px-8 py-4 z-10">
      {/* Logo Section */}
      <div>
        <Link to="/" className="text-2xl font-bold text-black">FreshSense</Link>
        <p className="text-sm text-gray-600">Freshness detector</p>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-800">
        <li><Link to="/" className="hover:text-green-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-green-600">About</Link></li>
        <li><Link to="/blog" className="hover:text-green-600">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
      </ul>

      {/* Login Button */}
      <Link to="/login" className="flex items-center space-x-2">
        <FaUserCircle className="text-black text-xl" /> {/* ✅ Fixed Icon */}
        <span className="text-black hover:underline">Log In</span>
      </Link>
    </nav>
  );
};

export default Navbar;
