
function IconMail() {
  return (
    <div className="relative inline-flex flex-col items-center group">

        <a
            href="mailto:jaimemccarron@gmail.com"
            target="blank"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 dark:bg-gray-50  hover:bg-gray-500 dark:hover:bg-gray-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-gray-50 dark:stroke-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
            >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.5l-9 6.5-9-6.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l9 6 9-6"
                />
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="12"
                  rx="2"
                  ry="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
            </svg>
        </a>
        <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-800 dark:bg-gray-200 text-gray-50 dark:text-gray-900 text-sm px-3 py-1.5 rounded-md shadow-md whitespace-nowrap">
          Email
       </div>
      </div>
    </div>

    
  )
}

export default IconMail