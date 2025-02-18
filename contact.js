import A2 from "../assets/aw.jpeg"; // ✅ Import the image

const Contact = () => {
  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-center mb-10">Want to learn more about our plans? Get in touch.</p>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={A2} // ✅ Use imported image here
            alt="Contact Section" 
            className="w-full rounded-md"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-md">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name *" className="border p-2 rounded w-full" required />
              <input type="text" placeholder="Last name *" className="border p-2 rounded w-full" required />
            </div>
            <input type="email" placeholder="Email *" className="border p-2 rounded w-full my-2" required />
            <input type="text" placeholder="Subject" className="border p-2 rounded w-full my-2" />
            <textarea placeholder="Message" className="border p-2 rounded w-full my-2" rows="4"></textarea>
            <button type="submit" className="bg-black text-white px-6 py-2 text-lg font-semibold rounded-md hover:bg-gray-800 w-full">
              Submit
            </button>
          </form>
          <p className="text-center mt-4">Tel: 123-456-7890</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black text-white py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <form className="w-full max-w-md">
            <label htmlFor="email" className="block text-lg mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md text-black"
              placeholder="Enter your email"
              required
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="subscribe" className="mr-2" />
              <label htmlFor="subscribe">Yes, subscribe me to your newsletter.</label>
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 text-lg font-semibold rounded-md hover:bg-gray-200 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
