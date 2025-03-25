import Image from "next/image"

function Project2Image({src1="", alt1="", src2="", alt2=""}) {
  return (

            <div className="flex flex-row w-full space-x-4 justify-center">
                <div className="relative w-1/2 aspect-[1223/865]">
                <Image
                      src= {src1}
                      fill
                      style={{ objectFit:'cover' }}
                      className= "rounded-l-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt= {alt1}
                />
                </div>
                <div className="relative w-1/2 aspect-[1223/865]">
                <Image
                      src= {src2}
                      fill
                      style={{ objectFit:'cover' }}
                      className= "rounded-r-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt= {alt2}
                />
                </div>
                
            </div>
  )
}

export default Project2Image