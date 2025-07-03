import Image from "next/image"
import Link from "next/link"


function Project({project = "", chip1 = "", chip2 = "", chip3 = "", chip4 = "", chip5 = "",summary = "",link = "", src = "", alt = "", className=" relative w-full md:w-2/3 aspect-[1920/1080]"}) {
  return (
    <Link 
    href={link}
    className="flex flex-col md:flex-row md:items-stretch group w-full md:space-x-16"
    >
      {/* Left Section (Desktop) */}
              <div className="flex flex-col md:w-1/3 pb-4 md:pb-0 md:justify-between space-y-8 md:h-auto">
              <div className="space-y-8">
              <h2 className="text-5xl">{project}</h2>
              
                <div className="flex flex-wrap gap-4">
                  {chip1 && <div className="chip">{chip1}</div>}
                  {chip2 && <div className="chip">{chip2}</div>}
                  {chip3 && <div className="chip">{chip3}</div>}
                  {chip4 && <div className="chip">{chip4}</div>}
                  {chip5 && <div className="chip">{chip5}</div>}
                </div>
                <p className="text-xl">{summary}</p>
              </div>
                
                <div className="hidden md:block">
                  <div className="bg-gray-800 dark:bg-gray-50 text-xl rounded-md px-4 py-1 text-center text-gray-50 dark:text-gray-900 whitespace-nowrap">
                    View work
                  </div>
                </div>
              </div>

      {/* Right Section */}
        <div className={className}>
          <Image
            src={src}
            fill
            className=" rounded-md object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={alt}
            priority
          />
        </div>
        {/* Mobile button */}
        <div className="md:hidden mt-4 bg-gray-800 dark:bg-gray-50 text-xl rounded-md px-8 py-1 text-center text-gray-50 dark:text-gray-900">
          View work
        </div>              
    </Link>
  )
}

export default Project