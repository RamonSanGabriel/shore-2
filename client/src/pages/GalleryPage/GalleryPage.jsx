import { Helmet, HelmetProvider } from 'react-helmet-async';
import Gallery from '../../components/Gallery/Gallery';

const GalleryPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <h1>Gallery Page</h1>
      <Gallery />
    </HelmetProvider>
  );
};

export default GalleryPage;
