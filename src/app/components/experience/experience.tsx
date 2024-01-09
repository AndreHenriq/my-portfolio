import Image from "next/image"

import "./experience.scss"
import { SectionTitle } from "../sectionTitle/section-title"

export function Experience(){
    return(
    <div className='experience'>
        <SectionTitle text="Experience"/>
        <p>
            Finishing my graduation of 3 years in System Development and Analysis and working as an intern
            responsible for keeping machines, labs, servers and network working properly
        </p>
        <div className="experience-time">
            <div>
                <div className="infos"><Image src="/java.png" alt="Java Logo" width={40} height={40} priority /></div>
                <div><Image src="/react.png" alt="React Logo" width={40} height={40} priority /></div>
                <div><Image src="/js.png" alt="JS Logo" width={40} height={40} priority /></div>
                <div><Image src="/ts.png" alt="ts Logo" width={40} height={40} priority /></div>
            </div>

        </div>
      </div>
    )
}