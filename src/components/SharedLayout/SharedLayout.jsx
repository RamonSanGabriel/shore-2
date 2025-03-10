import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useEffect } from 'react';

import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import MenuIcons from '../MenuIcons/MenuIcons';

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
