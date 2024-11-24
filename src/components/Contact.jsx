import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-yellow-500 text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg mb-12">
          Have questions, feedback, or need assistance? Get in touch with us,
          and we'll be happy to help!
        </p>

        <form className="p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
