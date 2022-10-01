import React, {useState} from 'react';
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo_jc.png';
import {Link} from 'react-scroll';
import '../scss/components/_navbar.scss';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='navbar-section' name='header'>
        <div>
            <Link to="home" spy={true} smooth={true} duration={500}>
                <img src={Logo} alt="logo" className='navbar-logo' />
            </Link>
        </div>

        {/*Menu*/}
        <ul className='navbar-menu'>
            <li>
                <Link to="about" spy={true} smooth={true} duration={500} className='navbar-link'>
                    About
                </Link>
            </li>
            <li>
                <Link to="testimonials" spy={true} smooth={true} duration={500} className='navbar-link'>
                    Testimonials
                </Link>
            </li>
            <li>
                <Link to="work" spy={true} smooth={true} duration={500} className='navbar-link'>
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact" spy={true} smooth={true} duration={500} className='navbar-link'>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='navbar-hamburger'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'navbar-mobile-menu'}>
            <li className='navbar-mobile-list'>
                <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                    About
                </Link>
            </li>
            <li className='navbar-mobile-list'>
                <Link to="testimonials" smooth={true} duration={500} onClick={handleClick}>
                    Testimonials
                </Link>
            </li>
            <li className='navbar-mobile-list'>
                <Link to="work" smooth={true} duration={500} onClick={handleClick}>
                    Work
                </Link>
            </li>
            <li className='navbar-mobile-list'>
                <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social Icons */}
        <div className='navbar-social-menu'>
            <ul>
                <li className='navbar-social-list linkedin'>
                    <a href="/" className='navbar-social-link'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>

                <li className='navbar-social-list github'>
                    <a href="/" className='navbar-social-link'>
                        Github <FaGithub size={30} />
                    </a>
                </li>

                <li className='navbar-social-list email'>
                    <a href="/" className='navbar-social-link'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>

                <li className='navbar-social-list resume'>
                    <a href="/" className='navbar-social-link'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;