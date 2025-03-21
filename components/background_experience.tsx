import Image from "next/image"

const BackgroundExperience = ({src = "", width = 48, className = "", alt = "", company = "", role = "", startDate= "", endDate= "", description = [""]}) => {

  return (
    <div className="space-y-4">
        <Image
                      src= {src}
                      width={width}
                      height= {48}
                      className= {className}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt= {alt}
        />
        <h4>
            {company}
        </h4>
        <h3>
            {role}
        </h3>
        <p className="text-xl text-gray-500 dark:text-gray-400">
            {startDate} - {endDate}
        </p>
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