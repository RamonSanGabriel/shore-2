import { Route, Routes, Navigate } from 'react-router-dom';
// import css from './App.module.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { lazy } from 'react';

// Pages
// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
// prettier-ignore
// const ServicesPage = lazy(() =>import('../pages/ServicesPage/ServicesPage'));
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
// const GalleryPage = lazy(() => import('../pages/GalleryPage/GalleryPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage/GalleryPage'));
// prettier-ignore
// const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
