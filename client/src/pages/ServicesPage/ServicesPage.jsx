import { Helmet, HelmetProvider } from 'react-helmet-async';
import Service from '../../components/Service/Service';

// import Scroll from '../../components/Scroll/Scroll';

const ServicesPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <Service />
      {/* <Scroll /> */}
    </HelmetProvider>
  );
};

export default ServicesPage;
