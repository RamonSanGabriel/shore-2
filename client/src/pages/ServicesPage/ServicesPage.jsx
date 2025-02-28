import { Helmet, HelmetProvider } from 'react-helmet-async';
import Services from '../../components/Services/Services';
// import Scroll from '../../components/Scroll/Scroll';

const ServicesPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <Services />
      {/* <Scroll /> */}
    </HelmetProvider>
  );
};

export default ServicesPage;
