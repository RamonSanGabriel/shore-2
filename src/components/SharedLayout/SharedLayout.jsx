import React from 'react';
import css from './SharedLayout.module.css';
import { useEffect } from 'react';
import Header from '../Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MenuIcons from '../MenuIcons/MenuIcons';
import Loader from '../Loader/Loader';

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
