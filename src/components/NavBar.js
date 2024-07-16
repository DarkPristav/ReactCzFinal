import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="header__nav">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : 'nonactiveLink')}>
          Domů
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonactiveLink')}>
          About
        </NavLink>
        <NavLink
          to="/API"
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonactiveLink')}>
          API
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
