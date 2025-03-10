// import { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Main from '../../components/Main/Main';
// import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Main />
      {/* <Suspense fallback={<Loader />}> */}
      <Outlet />
      {/* </Suspense> */}
    </HelmetProvider>
  );
};

export default HomePage;
