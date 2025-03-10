import { Helmet, HelmetProvider } from 'react-helmet-async';
import Service from '../../components/Service/Service';

const ServicesPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <Service />
    </HelmetProvider>
  );
};

export default ServicesPage;
