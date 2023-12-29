import Header from './components/header/header'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <div className='experience'>
        <h3>Experience</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore dolores ea dicta</p>
        <div className="experience-time">

        </div>
        <div className='infos'>
          <h3>Languages</h3>
          <div className='languages-info'>
            <span>🇺🇸 EN - Fluent</span>
            <span>🇧🇷 PT-BR - Native</span>
          </div>
          <h3>Education</h3>
          <div className='educational-info'>
            <span>🎓</span>
            <span>Systems Development and Analysis - Federal Institute of Paraná</span>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <div className='social'></div>
        <button>Contact me!</button>
      </div>
    </main>
  )
}
