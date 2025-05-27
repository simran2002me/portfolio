import React from 'react'
import './Skills.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Simran_Resume.pdf'

const Skills = () => {
  return (
    <div className='skills'>
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>skills</span>
        <span>
          Responsive and Scalable web designing using Reactjs, JavaScript, HTML and CSS.
          <br />Team player and good communication skills.
        </span>
        <a href={Resume}>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{ left: '16rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Languages & Frameworks'}
            details={'ReactJS, JavaScript, CSS, HTML, Redux'}
          />
        </div>
        <div style={{ top: '12rem', left: '-6rem' }}>
          <Card
            emoji={Glasses}
            heading={'Tools'}
            details={'REST APIs, Git, CI/CD Pipelines, Agile Methodology, Code Reviews, Version Control'}
          />
        </div>
        <div style={{ top: '22rem', left: '13rem' }}>
          <Card
            emoji={Humble}
            heading={'Frontend Concepts'}
            details={'Responsive Design, Performance Optimization, State Management, Debugging, UI/UX Principles, Theming'}
          />
        </div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Skills
