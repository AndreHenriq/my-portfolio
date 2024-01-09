import { LinkedInIcon } from "../icons/Linkedin-icon";
import { GitHubIcon } from "../icons/github-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="">
                <LinkedInIcon/>
            </a>
            <a href="">
                <GitHubIcon/>
            </a>
        </div>
    )
}