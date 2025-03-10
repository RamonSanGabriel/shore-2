// import { Suspense } from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Main from '../../components/Main/Main';
// import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  return (
    <>
      <>
        <title>Home</title>
      </>
      <Main />
      {/* <Suspense fallback={<Loader />}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default HomePage;
