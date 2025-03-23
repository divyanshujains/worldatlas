import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {


const handleFormSubmit = (formData) => {
  console.log(formData);
  
  const formInputData = Object.fromEntries(formData.entries());
  console.log(formInputData);
};


  return (
    <div>
       <Navbar />
          <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-lg  p-8 ">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Contact Us</h2>

        <form action={handleFormSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-white mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-3 border border-white text-white  outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-white mb-1">Email Address</label>
            <input
              type="email"
              className="w-full p-3 border border-white text-white  outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-white mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 border border-white text-white outline-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-[#98D3E8] text-black p-3  text-start inline px-4 font-bold "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
