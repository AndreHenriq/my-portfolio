import Header from './components/header/header'
import './styles/home.scss'

export default function Home() {
  return (
    <main>
      <Header/>
          <div className='experience'>
            <h3>Experience</h3>
            <p>texto...</p>
          </div>
          <div className='experience-time'>
            
          </div>
          <div className='infos'>
            <h3>Languages</h3>
            <div className='languages-ingo'>
              <span>🇺🇸 EN - Fluent</span>
              <span>🇧🇷 PT-BR - Native</span>
            </div>
            <h3>Education</h3>
            <div className='educational-info'>
              <span></span>
              <span>Systems Development and Analisys - Federal Institute of Paraná</span>
            </div>
            <div className='info'>
              
            </div>
            <div className='buttons'>
              <div className='social'></div>
              <button>Contact me!</button>
            </div>
          </div>
    </main>
  )
}
