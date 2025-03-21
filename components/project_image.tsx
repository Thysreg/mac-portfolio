import Image from "next/image"

function ProjectImage({src="", alt="", className="relative aspect-[1920/1080]"}) {
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
            </div>
  )
}

export default ProjectImage