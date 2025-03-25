import React from 'react'

function IconLinkedin() {
  return (
    <div className="relative inline-flex flex-col items-center group">

    <a
        href="https://www.linkedin.com/in/jaime-mccarron/"
        target="blank" 
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 dark:bg-gray-50  hover:bg-gray-500 dark:hover:bg-gray-300"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-50 dark:text-gray-900 stroke-gray-50 dark:stroke-gray-900"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M22.23 0H1.77C.8 0 0 .774 0 1.728v20.544C0 23.226.8 24 1.77 24h20.46C23.2 24 24 23.226 24 22.272V1.728C24 .774 23.2 0 22.23 0zM7.09 20.452H3.58V9h3.51v11.452zM5.335 7.48a2.033 2.033 0 110-4.066 2.033 2.033 0 010 4.066zm15.118 12.972h-3.51v-5.46c0-1.302-.025-2.978-1.82-2.978-1.82 0-2.098 1.42-2.098 2.886v5.552H9.525V9h3.37v1.561h.048c.47-.891 1.618-1.832 3.33-1.832 3.56 0 4.218 2.342 4.218 5.389v6.334z" />
        </svg>
    </a>
    <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-800 dark:bg-gray-200 text-gray-50 dark:text-gray-900 text-sm px-3 py-1.5 rounded-md shadow-md whitespace-nowrap">
          LinkedIn Profile
       </div>
      </div>
    </div>

  )
}

export default IconLinkedin