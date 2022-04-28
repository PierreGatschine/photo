import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './index.scss'

const Sidebar = () => {
    library.add(faHome);
    return (
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <p>Logo</p>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
        </nav> 
        </div>
    );
};

export default Sidebar;