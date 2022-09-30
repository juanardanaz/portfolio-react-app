import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import '../scss/components/_work.scss';

const Work = () => {
  return (
    <div name='work' className='work-section'>
        {/* Container */}
        <div className='work-container'>
            <div className='work-intro-container'>
                <p className='work-title'>Work</p>
                <p className='work-subtitle'>My Recent Works</p>
            </div>

            {/* Container */}
            <div className='work-projects-container'>

                {/* Grid Item */}
                <div 
                    style={{backgroundImage: `url(${WorkImg})`}} 
                    className='shadow-lg shadow-[#040c16] group container content-div work-project-img'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-project-title'>
                            React JS Application
                        </span>
                        <div className='work-project-cta'>
                            <a href="/">
                                <button className='work-project-button'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='work-project-button'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${realEstate})`}} 
                    className='shadow-lg shadow-[#040c16] group container content-div work-project-img'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-project-title'>
                            React JS Application
                        </span>
                        <div className='work-project-cta'>
                            <a href="/">
                                <button className='work-project-button'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='work-project-button'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${WorkImg})`}} 
                    className='shadow-lg shadow-[#040c16] group container content-div work-project-img'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-project-title'>
                            React JS Application
                        </span>
                        <div className='work-project-cta'>
                            <a href="/">
                                <button className='work-project-button'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='work-project-button'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${realEstate})`}} 
                    className='shadow-lg shadow-[#040c16] group container content-div work-project-img'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-project-title'>
                            React JS Application
                        </span>
                        <div className='work-project-cta'>
                            <a href="/">
                                <button className='work-project-button'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='work-project-button'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${WorkImg})`}} 
                    className='shadow-lg shadow-[#040c16] group container content-div work-project-img'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-project-title'>
                            React JS Application
                        </span>
                        <div className='work-project-cta'>
                            <a href="/">
                                <button className='work-project-button'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='work-project-button'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${realEstate})`}} 
                    className='shadow-lg shadow-[#040c16] group container content-div work-project-img'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='work-project-title'>
                            React JS Application
                        </span>
                        <div className='work-project-cta'>
                            <a href="/">
                                <button className='work-project-button'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='work-project-button'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work;