import { Experience } from './components/experience/experience'
import { ExperienceTech } from './components/experience/experience-tech'
import Header from './components/header/header'
import { EmailIcon } from './components/icons/email-icon'
import{Info} from './components/information/information'
import { SocialBtns } from './components/social-btns/social-btns'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
      <ExperienceTech/>
      <Info/>
      <div className='buttons'>
        <SocialBtns/>
        <a className='btn-primary' href='mailto:teste@gmail.com'>
          Contact me
          <EmailIcon/>
      </a>
      </div>
    </main>
  )
}
