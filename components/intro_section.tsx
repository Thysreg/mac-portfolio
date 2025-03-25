"use client"
import { useState } from 'react';

function Intro() {

    const [introText, setIntroText] = useState(
        "Hello, I’m a designer dedicated to enhancing functionality while ensuring every detail reflects thoughtful style."
      );

      const [activeButton, setActiveButton] = useState<string>("For everyone");
    
      const handleButtonClick = (text: string, buttonName: string) => {
        setIntroText(text);
        setActiveButton(buttonName);
      };

      const getButtonClass = (buttonName: string): string => {
        const baseClass = "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50";
        const activeClass = "text-gray-900 dark:text-gray-50";
        return `${baseClass} ${activeButton === buttonName ? activeClass : ''}`;
      }
      
  return (
    <section id="Intro" className="h-screen space-y-4  pt-60 justify-center">
      <div className="flex row space-x-4 overflow-auto text-nowrap">
        <button
          onClick={() => handleButtonClick(
            "Hello, I'm a designer dedicated to enhancing functionality while ensuring every detail reflects thoughtful style.",
            "For everyone"
                      )}
            className={getButtonClass("For everyone")}
            > For everyone
        </button>

        <button
          onClick={() => handleButtonClick(
            "I’m a product designer with 4 years of experience in brand and digital product, having contributed to both innovative startups and established companies.",
            "Recruiters"
                      )}
            className={getButtonClass("Recruiters")}
            > Recruiters
        </button>

        <button
          onClick={() => handleButtonClick(
            "I’m a systems thinker with an uncompromising eye for quality. From refining processes to crafting pixel-perfect designs, I thrive on collaboration and innovation.",
            "Product Designers"
                      )}
            className={getButtonClass("Product Designers")}
            > Product Designers
        </button>

        <button
          onClick={() => handleButtonClick(
            "With a technical mindset and engineering background, I’ve built multiple websites, including this portfolio, and developed a mobile app, bridging design and development seamlessly.",
            "Engineers"
                      )}
            className={getButtonClass("Engineers")}
            > Engineers
        </button>
      </div>
      <h3 className='relative justify-center text-2xl md:text-7xl tracking-tight'>{introText}</h3>
    </section>
    
  )
}

export default Intro