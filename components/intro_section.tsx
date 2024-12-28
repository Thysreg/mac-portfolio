"use client"
import { useState } from 'react';

function Intro() {

    const [introText, setIntroText] = useState(
        "Hello, I’m a designer dedicated to enhancing functionality while ensuring every detail reflects thoughtful style."
      );
    
      const handleButtonClick = (text="") => {
        setIntroText(text);
      };
      
  return (
    <section id="Intro" className="h-screen space-y-4  pt-60 justify-center">
      <div className="flex row space-x-4 overflow-auto text-nowrap">
        <button onClick={() =>
                handleButtonClick("Hello, I’m a designer dedicated to enhancing functionality while ensuring every detail reflects thoughtful style.")}
                className="text-gray-400 hover:text-gray-50">For everyone
        </button>
        <button onClick={() =>
                handleButtonClick("I’m a product designer with 4 years of experience in brand and digital product, contributing to both innovative startups and established companies.")}
                className="text-gray-400 hover:text-gray-50">Recruiters
        </button>
        <button onClick={() =>
                handleButtonClick("I’m a systems thinker with an uncompromising eye for quality. From refining processes to crafting pixel-perfect designs, I thrive on collaboration and innovation.")}
                className="text-gray-400 hover:text-gray-50">Product Designers
        </button>
        <button onClick={() =>
                handleButtonClick("With a technical mindset and engineering background, I’ve built multiple websites, including this portfolio, and developed a mobile app, bridging design and development seamlessly.")}
                className="text-gray-400 hover:text-gray-50">Engineers
        </button>
      </div>
      <h1 className='relative justify-center'>{introText}</h1>
    </section>
    
  )
}

export default Intro