import { Route, Routes, Navigate } from 'react-router-dom';
import css from './App.module.css';
import SharedLayout from '../components/SharedLayout/SharedLayout.jsx';
import { lazy } from 'react';

// Pages
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
// prettier-ignore

const ServicesPage = lazy(() =>import('../pages/ServicesPage/ServicesPage.jsx'));
const GalleryPage = lazy(() => import('../pages/GalleryPage/GalleryPage'));
// prettier-ignore
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
  return (
    <div className={css.appWrapper}>
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
    </div>
  );
};

export default App;
