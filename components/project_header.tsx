import Image from "next/image"

function ProjectHeader({src="", alt=""}) {
  return (

            <div className="relative w-full h-[400px]">
                <Image
                      src= {src}
                      fill
                      style={{ objectFit:'cover' }}
                      className= " rounded-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt= {alt}
                      priority
                />
            </div>
  )
}

export default ProjectHeader