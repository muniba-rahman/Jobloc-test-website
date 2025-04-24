import React, { useState } from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/logo.png';
import ProfileImage from '../../assets/profile-image.jpg';
import SearchIcon from '../../assets/search.png';
import { navLinks } from '../../data';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.left}>
          <a href="/"><img src={Logo} alt="Logo" className={classes.logo} /></a>
        </div>

        <button className={classes.toggleBtn} onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>

        <nav className={`${classes.nav} ${menuOpen ? classes.open : ''}`}>
          <ul className={classes.navLinks}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? `text-nowrap f-16 fw-600 ${classes.activeClass}` : `text-nowrap f-16 fw-500 ${classes.linkClass}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={classes.right}>
            <div className={classes.search}>
              <img src={SearchIcon} alt="Search" />
              <input type="search" placeholder="Search" className={classes.input} />
            </div>
            <button className={`btn text-nowrap ${classes.resumeBtn}`}>Resume Builder</button>
            <img src={ProfileImage} alt="Profile" className={classes.profileImage} />
          </div>
        </nav>
      </div>
    </header>
  );
}

