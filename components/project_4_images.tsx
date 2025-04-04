import Image from "next/image"

function Project4Image({src1="", alt1="", src2="", alt2="", src3="", alt3="", src4="", alt4="", label="", className="relative w-1/4 aspect-[1284/2778]"}) {
  return (
    <div className="relative flex flex-row w-full space-x-4 justify-center">
      <div className={className}>
        <Image
          src= {src1}
          fill
          style={{ objectFit:'cover' }}
          className= "rounded-l-md"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt= {alt1}
        />
      </div>
      <div className={className}>
        <Image
          src= {src2}
          fill
          style={{ objectFit:'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt= {alt2}
        />
      </div>
      <div className={className}>
        <Image
          src= {src3}
          fill
          className= "object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt= {alt3}
        />
      </div>
      <div className={className}>
        <Image
          src= {src4}
          fill
          style={{ objectFit:'cover' }}
          className= "rounded-r-md"
          sizes="(max-width: 768px) 100vw, 50vw"
          alt= {alt4}
        />
      </div>
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
        {label}
      </div>
    </div>
  )
}

export default Project4Image