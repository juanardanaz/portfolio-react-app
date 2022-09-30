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
    <div className='navbar-section'>
        <div>
            <img src={Logo} alt="Logo Image" className='navbar-logo' />
        </div>

        {/* Menu */}
        <ul className='navbar-menu'>
            <li>
                <Link to="home" smooth={true} duration={500} className='navbar-link'>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500} className='navbar-link'>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500} className='navbar-link'>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500} className='navbar-link'>
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500} className='navbar-link'>
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
                <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                    Home
                </Link>
            </li>
            <li className='navbar-mobile-list'>
                <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                    About
                </Link>
            </li>
            <li className='navbar-mobile-list'>
                <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
                    Skills
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