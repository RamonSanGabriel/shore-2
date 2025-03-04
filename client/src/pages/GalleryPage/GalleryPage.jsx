import { Helmet, HelmetProvider } from 'react-helmet-async';
import Gallery from '../../components/Gallery/Gallery';
// import { Suspense } from 'react';
// import Loader from '../../components/Loader/Loader';

const GalleryPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <h1>Gallery Page</h1>
      {/* <Suspense fallback={<Loader />}> */}
      <Gallery />
      {/* </Suspense> */}
    </HelmetProvider>
  );
};

export default GalleryPage;
