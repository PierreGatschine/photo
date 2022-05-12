import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoName from '../../assets/images/logo-appareil.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faEnvelope, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faBehance, faUnsplash } from '@fortawesome/free-brands-svg-icons';
import './index.scss'

const Sidebar = () => {
    library.add(faHome, faUser, faEnvelope, faCamera, faLinkedinIn, faBehance, faUnsplash);
    return (
      <Fragment>

        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={LogoName} alt="logo" />
            </Link>
        <nav>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                to="/"
                >
                <FontAwesomeIcon icon={faHome} color='#8D8D8D'/>
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active"
                className="about-link"
                to="/about"
                >
                <FontAwesomeIcon icon={faUser} color='#8D8D8D'/>
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active"
                className="portfolio-link"
                to="/portfolio"
                >
                <FontAwesomeIcon icon={faCamera} color='#8D8D8D'/>
            </NavLink>
            <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
            >
            <FontAwesomeIcon icon={faEnvelope}  color='#8D8D8D'/>
          </NavLink>
        </nav> 
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/pierregatschine/"
              target="_blank"
              rel="noreferrer"
              >
              <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
            </a>
          </li>
          <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            >
            <FontAwesomeIcon icon={faBehance} color="#4d4d4e" />
          </a>
        </li>
          <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            >
            <FontAwesomeIcon icon={faUnsplash} color="#4d4d4e" />
          </a>
        </li>
        </ul>
        </div>
      </Fragment>
    );
};

export default Sidebar;