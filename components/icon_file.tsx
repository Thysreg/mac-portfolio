import React from 'react'

function IconFile() {
  return (
    <a
        href="https://drive.google.com/file/d/1ri55xVvthQ-16kSCXrZlVshsjigH315c/view?usp=sharing"
        target="blank" 
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 dark:bg-gray-50  hover:bg-gray-500 dark:hover:bg-gray-300"
    >
        <svg xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 text-gray-50 dark:text-gray-900 stroke-gray-50 dark:stroke-gray-900"
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
            <path d="M13 2v7h7"/>
        </svg>
    </a>
  )
}

export default IconFile