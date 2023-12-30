import Image from "next/image"
import "./header.scss"

export default function Header() {
    return (
        <div className='header'>
            <div>
                <h1>Hi 👋🏻,  
                <p>I&apos;m André Comar!</p>
                </h1>
                <h2>Fullstack Developer</h2>
            </div>
            <Image
                src="/eu.jpg"
                alt="perfil"
                width={195}
                height={204}
                priority
            />
        </div>
    )
}