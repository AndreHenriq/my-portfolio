import Image from "next/image"
import "./header.scss"

export default function Header() {
    return (
        <div>
            <div className='header'>
            <Image
                src="/eu.jpg"
                alt="perfil"
                width={195}
                height={204}
                priority
            />
                <div>
                    <h1>Hi, I'm 
                    <p>André Comar</p>
                    </h1>
                    <h2>Fullstack Developer</h2>
                </div>
            </div>
        </div>
    )
}