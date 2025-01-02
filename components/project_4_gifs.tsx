import Image from "next/image"

function Project4Gifs({src1="", alt1="", src2="", alt2="", src3="", alt3="", src4="", alt4=""}) {
  return (

            <div className="flex flex-row w-full space-x-4 justify-center">
                <div className="relative w-1/4 aspect-[375/667]">
                <Image
                      src= {src1}
                      fill
                      style={{ objectFit:'cover' }}
                      className= "rounded-l-md"
                      alt= {alt1}
                />
                </div>
                <div className="relative w-1/4 aspect-[375/667]">
                <Image
                      src= {src2}
                      fill
                      style={{ objectFit:'cover' }}
                      alt= {alt2}
                />
                </div>
                <div className="relative w-1/4 aspect-[375/667]">
                <Image
                      src= {src3}
                      fill
                      className= "object-cover"
                      alt= {alt3}
                />
                </div>
                
                <div className="relative w-1/4 aspect-[375/667]">
                <Image
                      src= {src4}
                      fill
                      style={{ objectFit:'cover' }}
                      className= "rounded-r-md"
                      alt= {alt4}
                />
                </div>
                
            </div>
  )
}

export default Project4Gifs