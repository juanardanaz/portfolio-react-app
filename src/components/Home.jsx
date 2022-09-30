import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import '../scss/components/_home.scss';

const Home = () => {
  return (
    <div name='home' className='home-section'>

        {/* Container */}
        <div className='home-container'>
            <p className='home-intro'>Hi, my name is</p>
            <h1 className='home-title'>Juan Cruz Ardanaz</h1>
            <h2 className='home-subtitle'>I'm a Multimedia Designer</h2>
            <p className='home-description'>A Multimedia Designer, hailing from Argentina. 
                Interested in design and animation, technology and always open to book recommendations.
            </p>

            <div>
                <button className='home-button group'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 hover:'/>
                    </span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Home;