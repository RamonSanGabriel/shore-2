import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';

const AboutPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1>About Us</h1>
      <p>This is the About page where you can learn more about us.</p>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default AboutPage;
