
function IconInstagram() {
  return (
    <a
        href="https://www.instagram.com/mccarron.caicoya/"
        target="blank"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 dark:bg-gray-50  hover:bg-gray-500 dark:hover:bg-gray-300"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6  stroke-gray-50 dark:stroke-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
        >
            <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11.37A4 4 0 1112.63 8h.01A4 4 0 0116 11.37z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.5 6.5h.01"
            />
        </svg>
    </a>
  )
}

export default IconInstagram