"use client"

import {useState} from "react";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import IconMail from "./icon_mail";
import IconInstagram from "./icon_instagram";
import IconLinkedin from "./icon_linkedin";
import IconYoutube from "./icon_youtube";

interface MenuProps {
  sections: string[];
}

const Nav = ({sections = [] }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId = "") => {
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({ behavior: "smooth"});
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between text-gray-50 px-4 md:px-12 my-8">
        <a href="./" className="text-lg text-gray-400 hover:text-gray-50">JM</a>
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">

            <IconMail />
            <IconLinkedin />
            <IconInstagram />
            <IconYoutube />
            
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            {!isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-50"
                aria-label="Open Menu"
                >
                  <HiOutlineMenuAlt4 size={20}/>
              </button>
            )}
          </div>
          {/* Mobile Full-Screen Menu */}
          {isMenuOpen &&(
            <div className="fixed inset-0 bg-[#0a0a0a] p-36 flex flex-col items-start justify-between px-4 space-y-6 z-50">
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-9 right-4 text-gray-50"
                aria-label="Close Menu"
              >
                <HiOutlineX size={20}/>
              </button>

              {/* Mobile Menu Items */}
              <div>
              {sections.map((section) => (
                <button
                key={section}
                onClick={() => handleScroll(section)}
                className="flex flex-col space-y-4 text-gray-400 hover:text-gray-50 text-2xl"
                >
                  {section}
                </button>
              ))}
              </div>
              {/* Social Icons for Mobile */}
              <div className="flex flex-col space-y-4">
                <IconMail />
                <IconLinkedin />
                <IconInstagram />
                <IconYoutube />
              </div>

              
            </div>
          )}
        </nav>
  )
}

export default Nav