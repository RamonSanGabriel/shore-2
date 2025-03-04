import { Suspense } from 'react';
import css from './Main.module.css';
import Section1 from './Section/Section1.jsx';
import Section2 from './Section/Section2.jsx';
// import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx';
import Features from './Section/Features.jsx';
import { main } from '../../data/main.js';

const Main = () => {
  const { header, subHeader } = main;
  return (
    <>
      <main className={css.main}>
        <h1 className={css.title}>{header}</h1>
        <span>{subHeader}</span>
        <Suspense fallback={<Loader />}>
          <Section1 />
          <Section2 />
          <Features />
        </Suspense>
        {/* <Outlet /> */}
      </main>
    </>
  );
};

export default Main;
