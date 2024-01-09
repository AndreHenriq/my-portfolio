import { LinkedInIcon } from "../icons/Linkedin-icon";
import { GitHubIcon } from "../icons/github-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/andré-comar-3482a8153">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/AndreHenriq">
                <GitHubIcon/>
            </a>
        </div>
    )
}