import css from './MenuIcons.module.css';
import { menuIcons } from '../../data/menu-icons';
import { NavLink } from 'react-router-dom';

const MenuIcons = () => {
  return (
    <div className={css.menuIconsWrapper}>
      <ul className={css.menuList}>
        {menuIcons.map(({ id, icon: Icon, label, path }) => (
          <div key={id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.navLink : css.navListName
              }
              to={path}
            >
              <li className={css.menuListItems}>
                <Icon className={css.menuIcons} />
              </li>
              <p>{label}</p>
            </NavLink>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuIcons;
