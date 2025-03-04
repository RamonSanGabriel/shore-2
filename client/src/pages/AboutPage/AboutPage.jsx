import { HelmetProvider, Helmet } from 'react-helmet-async';
import About from '../../components/About/About';
// import Contacts from '../../components/Contacts/Contacts';
// import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
// import Loader from '../../components/Loader/Loader';

const AboutPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About</title>
      </Helmet>
      <About />
      {/* <Contacts /> */}
      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </HelmetProvider>
  );
};

export default AboutPage;
