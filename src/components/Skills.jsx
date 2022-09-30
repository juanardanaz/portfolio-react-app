import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import '../scss/components/_skills.scss';


const Skills = () => {
  return (
    <div name='skills' className='skills-section'>
        {/* Container */}
        <div className='skills-container'>
            <div>
                <p className='skills-title'>Skills</p>
                <p className='skills-description'>//Technologies I work with</p>
            </div>

            <div className='skills-list-container'>
                <div className='skills-list-box'>
                    <img src={HTML} alt="html icon" className='skills-list-img'/>
                    <p className='skills-list-text'>HTML</p>
                </div>
                <div className='skills-list-box'>
                    <img src={CSS} alt="css icon" className='skills-list-img'/>
                    <p className='skills-list-text'>CSS</p>
                </div>
                <div className='skills-list-box'>
                    <img src={JavaScript} alt="javascript icon" className='skills-list-img'/>
                    <p className='skills-list-text'>JAVASCRIPT</p>
                </div>
                <div className='skills-list-box'>
                    <img src={ReactImg} alt="react icon" className='skills-list-img'/>
                    <p className='skills-list-text'>REACT</p>
                </div>
                <div className='skills-list-box'>
                    <img src={GitHub} alt="github icon" className='skills-list-img'/>
                    <p className='skills-list-text'>GITHUB</p>
                </div>
                <div className='skills-list-box'>
                    <img src={Node} alt="node icon" className='skills-list-img'/>
                    <p className='skills-list-text'>NODE</p>
                </div>
                <div className='skills-list-box'>
                    <img src={Mongo} alt="mongodb icon" className='skills-list-img'/>
                    <p className='skills-list-text'>MONGO DB</p>
                </div>
                <div className='skills-list-box'>
                    <img src={AWS} alt="html icon" className='skills-list-img'/>
                    <p className='skills-list-text'>AWS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;