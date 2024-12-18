import Image from "next/image"
import Link from "next/link"

function Project({project = "", chip1 = "", chip2 = "", chip3 = "", chip4 = "", chip5 = "", role = "", link = "", src = "", alt = ""}) {
  return (
    <div className="flex flex-col md:flex-row justify-between  space-y-8 md:space-x-20">
              <div className="flex flex-col space-y-2 w-full justify-between">
                <h3>
                  {project}
                </h3>
                <div className="flex flex-wrap place-items-center space-x-2 space-y-2">
                
                  <div className="chip">
                    {chip1}
                  </div>
                  <div className="chip">
                    {chip2}
                  </div>
                  <div className="chip">
                    {chip3}
                  </div>
                  <div className="chip">
                    {chip4}
                  </div>
                  <div className="chip">
                    {chip5}
                  </div>
                </div>
                <h4>
                 {role}
                </h4>
                <Link href={link} className="bg-gray-50 text-xl rounded-sm px-8 py-1 text-center text-gray-900">
                  View work
                </Link>
              </div>
              <div className=" relative w-full h-[200px] md:h-[400px]">
                <Image
              src={src}
              fill
              className=" rounded-lg object-cover"
              alt={alt}
              />
              </div>
              
            </div>
  )
}

export default Project