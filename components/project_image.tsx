import Image from "next/image"

function ProjectImage({src="", alt="", label='', className="relative aspect-[1920/1080]"}) {
  return (

            <div className={className}>
                <Image
                      src= {src}
                      fill
                      
                      style={{ objectFit: "cover"}}
                      className= " rounded-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt= {alt}
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
                  {label}
                </div>
            </div>
  )
}

export default ProjectImage