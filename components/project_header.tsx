import Image from "next/image"

function ProjectHeader({src="", alt=""}) {
  return (

            <div className="relative w-full h-[400px]">
                <Image
                      src= {src}
                      fill
                      style={{ objectFit:'cover' }}
                      className= " rounded-md"
                      alt= {alt}
                />
            </div>
  )
}

export default ProjectHeader