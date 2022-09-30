import React from 'react';
import '../scss/components/_about.scss';

const About = () => {
    return (
    <div name='about' className='about-section'>
        <div className='about-container'>
            <div className='about-intro-container'>
                <div className='about-title-container'>
                    <p className='about-title'>
                    About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='about-description-container'>
                <div className='about-description'>
                    <p>Hi. I'm Juan, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am passionate about building excellent software that improves
                    the lives of those around me. I specialize in creating software
                    for clients ranging from individuals and small-businesses all the
                    way to large enterprise corporations. What would you do if you had
                    a software expert available at your fingertips?</p>  
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;