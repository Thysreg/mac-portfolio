import Image from "next/image"

const BackgroundExperience = ({src = "", width = 48, className = "", alt = "", company = "", role = "", description = [""]}) => {

  return (
    <div className="space-y-4">
        <Image
                      src= {src}
                      width={width}
                      height= {48}
                      className= {className}
                      alt= {alt}
        />
        <h3>
            {company}
        </h3>
        <h2>
            {role}
        </h2>
        <p>
            {Array.isArray(description)
            ? description.map((line, index) => (
                <span key = {index}>
                {line}
                <br />
                </span>
            ))
            : description
            }
        </p>
    </div>
  )
}

export default BackgroundExperience