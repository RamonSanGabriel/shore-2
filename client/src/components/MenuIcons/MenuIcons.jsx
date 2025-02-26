import css from './MenuIcons.module.css';
import { menuIcons } from '../../data/menu-icons';

const MenuIcons = () => {
  return (
    <div className={css.menuIconsWrapper}>
      <ul className={css.menuList}>
        {menuIcons.map(({ id, icon: Icon, label }) => (
          <div key={id}>
            <li className={css.menuListItems}>
              <Icon className={css.menuIcons} />
            </li>
            <p>{label}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuIcons;
