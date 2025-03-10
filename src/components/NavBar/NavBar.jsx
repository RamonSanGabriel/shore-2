import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';
import shoreLogo from '../../assets/Shore Residences Logo.avif';
import css from './NavBar.module.css';

const NavBar = () => {
  const { path } = navLinks;
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={css.navLink} to={path}>
          <img className={css.logo} src={shoreLogo} />
        </NavLink>
        <ul className={css.navList}>
          {navLinks.map(({ id, name, path }) => {
            return (
              <li className={css.navListItems} key={id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? css.navLink : css.navListName
                  }
                  to={path}
                >
                  <p className={css.navListName}>{name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
