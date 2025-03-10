import { navLinks } from '../../data/navLinks';
import shoreLogo from '../../assets/Shore Residences Logo.avif';
import css from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  // const { path } = navLinks;
  return (
    <>
      <nav className={css.nav}>
        {/* <NavLink className={css.navLink} to={path}> */}
        <img className={css.logo} src={shoreLogo} />
        {/* </NavLink> */}
        <ul className={css.navList}>
          {navLinks.map(({ id, link, path }) => (
            <li className={css.navListItems} key={id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.navLink : css.navListName
                }
                to={path}
              >
                <p className={css.navListName}>{link}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
