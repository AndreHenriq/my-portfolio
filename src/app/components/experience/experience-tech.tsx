import Image from "next/image"
import "./experience-tech.scss"

export function ExperienceTech(){
    return(
        <div className="experience-tech">
        <div><Image src="/java.png" alt="Java Logo" width={40} height={40} priority /></div>
        <div><Image src="/react.png" alt="React Logo" width={40} height={40} priority /></div>
        <div><Image src="/js.png" alt="JavaScript Logo" width={40} height={40} priority /></div>
        <div><Image src="/ts.png" alt="TypeScript Logo" width={40} height={40} priority /></div>
        </div>
    )
}