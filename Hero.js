import heroImage from "../assets/a23.jpeg";
import A1 from "../assets/az.jpg";
import A2 from "../assets/123.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-white shadow-md">
        <div className="text-lg font-bold">Sprouted.</div>
        <div className="space-x-6">
          <Link to="/" className="text-gray-800 hover:text-green-600">Home</Link>
          <Link to="/contact" className="text-gray-800 hover:text-green-600">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative flex justify-center items-center h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative text-center px-6 z-20">
          <h1 className="text-5xl font-bold mb-4">Discover Freshness</h1>
          <p className="text-lg mb-6">
            The ultimate freshness guide for young adults—stop guessing and start eating fresh!
          </p>
          <button
            className="bg-white text-black px-6 py-2 text-lg font-semibold rounded-md hover:bg-gray-200"
            aria-label="Book a session"
          >
            Check for Freshness
          </button>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Latest Articles</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article 1 */}
          <div className="relative rounded-lg overflow-hidden group">
            <img 
            className="w-full h-[550px] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
              src="https://i.pinimg.com/736x/49/56/c5/4956c56c0426e221ed06cd7e448a80d1.jpg" 
              alt="How to tell if avocados are ripe" 
              
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-70"></div>
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-4 text-white">
              <button className="mb-40 px-5 py-3 border border-white text-white font-semibold text-sm hover:bg-white hover:text-black transition-all">
                View
              </button>
              <h3 className="text-lg font-semibold mb-1">Young and Independent?</h3>
              <p className="text-sm opacity-80">Living on your own? Struggling to tell if your avocados are perfect or past their prime? We've got your back!</p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="relative rounded-lg overflow-hidden group">
            <img 
              src={A1} 
              alt="Tips for picking fresh fruits and veggies" 
              className="w-full h-[550px] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-70"></div>
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-4 text-white">
              <button className="mb-40 px-5 py-3 border border-white text-white font-semibold text-sm hover:bg-white hover:text-black transition-all">
                View
              </button>
              <h3 className="text-lg font-semibold mb-1">Fresh Picks, Smart Savings!</h3>
              <p className="text-sm opacity-80">
                Sick of wasting money on bad produce? Learn how to pick the freshest fruits and veggies effortlessly!
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="relative rounded-lg overflow-hidden group">
            <img 
              src={A2} 
              alt="The best freshness guide for young adults" 
              className="w-full h-[550px] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-70"></div>
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-4 text-white">
              <button className="mb-40 px-5 py-3 border border-white text-white font-semibold text-sm hover:bg-white hover:text-black transition-all">
                View
              </button>
              <h3 className="text-lg font-semibold mb-1">FreshSense: Your Ultimate Tool</h3>
              <p className="text-sm opacity-80">
                The ultimate freshness guide for young adults—stop guessing and start eating fresh!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <form className="w-full max-w-md">
            <label htmlFor="email" className="block text-lg mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md text-black"
              placeholder="Enter your email"
              required
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="subscribe" className="mr-2" name="subscribe" />
              <label htmlFor="subscribe">Yes, subscribe me to your newsletter.</label>
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 text-lg font-semibold rounded-md hover:bg-gray-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
