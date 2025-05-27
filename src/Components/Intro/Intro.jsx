import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import girl from '../../img/girl.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv.jsx'

const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hi, I Am</span>
                    <span>Simran</span>
                    <span>Frontend Developer with nearly 2 years of experience in web designing and development, producting the quality work</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/simran2002me">
                        <img src={Github} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/simran2002me">
                        <img src={LinkedIn} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/simran2002me">
                        <img src={Instagram} alt="Instagram" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={girl} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{ top: '-4%', left: '55%' }}>
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
                </div>
                <div style={{ top: '17.4rem', left: '-4%' }}>
                    <FloatingDiv image={thumbup} txt1="Ui Design" txt2="Award" />
                </div>

                {/* blur divs */}
                <div className="blur" style={{ backgroundColor: "rgb(238 210 255" }}></div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '15rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    )
}

export default Intro
