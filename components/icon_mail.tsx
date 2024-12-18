
function IconMail() {
  return (
        <a
            href="mailto:jaimemccarron@gmail.com"
            target="blank"
            className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full hover:bg-gray-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-gray-900"
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
    
  )
}

export default IconMail