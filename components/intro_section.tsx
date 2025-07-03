"use client"
import { useState } from 'react';

function Intro() {

    const [introText, setIntroText] = useState(
        "Hello, I’m Jaime, a designer who believes that great design starts with solving real problems. I focus on usability and clarity, while ensuring every detail reflects thoughtful style."
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
            "Hello, I’m Jaime, a designer who believes that great design starts with solving real problems. I focus on usability and clarity, while ensuring every detail reflects thoughtful style.",
            "For everyone"
                      )}
            className={getButtonClass("For everyone")}
            > For everyone
        </button>

        <button
          onClick={() => handleButtonClick(
            "I’m a product designer with 4+ years of experience building digital products. I’ve worked with startups and established teams to launch clean, functional designs that support both business goals and great user experiences.",
            "Recruiters"
                      )}
            className={getButtonClass("Recruiters")}
            > Recruiters
        </button>

        <button
          onClick={() => handleButtonClick(
            "I think in systems but obsess over the details. Whether it’s refining flows, shaping design ops, or polishing interfaces, I love collaborating with other designers and engineers to solve problems.",
            "Product Designers"
                      )}
            className={getButtonClass("Product Designers")}
            > Product Designers
        </button>

        <button
          onClick={() => handleButtonClick(
            "With a technical mindset and engineering background,  I’ve built several sites and mobile apps (including this one). I enjoy working closely with engineers to bridge design and development in a way that’s pragmatic and scalable.",
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