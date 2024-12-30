"use client";

import {useState, useEffect} from 'react';

interface SideNavProps {
  sections: string[];
}

function SideNav({sections=[]}: SideNavProps) {
    const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observedSections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>{
          if(entry.isIntersecting) {
            console.log("Active section", entry.target.id);
            setActiveSection(entry.target.id)
          }
        });
      },
      {
        root: null,
        threshold: 0.7
      }
    );

    observedSections.forEach((section) => observer.observe(section));
    return() => observer.disconnect();
  }, []);

  const handleScroll = (sectionId="") => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior:"smooth"});
    }
  };

  return (
    <div>
      <div className="hidden md:flex flex-col col-span-1 items-start mt-60 space-y-1 fixed">
          {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleScroll(section)}
            className={`text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 ${
              activeSection === section ? "font-bold text-gray-800 dark:text-gray-50" : ""
            }`}
            >
            {section}
          </button>
        ))}
      </div>
    </div>
    
  );
}

export default SideNav