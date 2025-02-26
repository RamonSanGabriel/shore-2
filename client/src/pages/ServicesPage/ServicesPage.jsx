import { Helmet, HelmetProvider } from 'react-helmet-async';

const ServicesPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Services</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default ServicesPage;
