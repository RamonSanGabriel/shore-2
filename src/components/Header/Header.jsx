import NavBar from '../NavBar/NavBar';
import css from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
