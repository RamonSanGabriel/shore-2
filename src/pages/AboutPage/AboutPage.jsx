import { HelmetProvider, Helmet } from 'react-helmet-async';
import About from '../../components/About/About';

const AboutPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About</title>
      </Helmet>
      <About />
    </HelmetProvider>
  );
};

export default AboutPage;
