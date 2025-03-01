import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import MenuIcons from '../MenuIcons/MenuIcons';
import { useEffect } from 'react';

const SharedLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <MenuIcons />
    </>
  );
};

export default SharedLayout;
