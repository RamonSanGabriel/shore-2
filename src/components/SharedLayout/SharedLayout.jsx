import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import MenuIcons from '../MenuIcons/MenuIcons';
import { useEffect } from 'react';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={css.appWrapper}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <MenuIcons />
    </div>
  );
};

export default SharedLayout;
