import React from 'react'
import Navbar from '../components/Navbar'
import countryfacts from "../api/CountryData.json"

const About = () => {
  return (
      <div>
      <Navbar />
      <div className='w-full min-h-screen py-10 px-4 bg-[#98D3E8] text-black'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-center text-4xl font-semibold mb-8'>
            About Us
          </h2>

          <div className='bg-[#1F1F1F] text-white rounded-xl p-8 shadow-lg space-y-6'>
            <p className='text-lg leading-relaxed'>
              Welcome to our world of fascinating facts and global insights! 🌍
              Our mission is to make learning about countries, cultures, and
              people an exciting and engaging journey for everyone.
            </p>

            <p className='text-lg leading-relaxed'>
              Whether you're a curious traveler, a student, or someone who just
              loves to explore the globe from your screen, our platform provides
              trusted information and unique facts about every country — all in
              one place.
            </p>

            <p className='text-lg leading-relaxed'>
              What sets us apart is our dedication to accuracy, simplicity, and
              design. With carefully curated data and a user-friendly interface,
              we aim to earn your trust and be your go-to source for country
              knowledge.
            </p>

            <p className='text-lg leading-relaxed'>
              Thank you for being a part of this journey. We’re constantly
              growing, improving, and adding new features — all with **you** in
              mind.
            </p>

            <div className='pt-4 border-t border-gray-700 text-center text-sm text-gray-400'>
              🌟 Trusted by thousands of users worldwide.
              <br />
              Built with love & curiosity.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
