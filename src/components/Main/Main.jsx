import css from './Main.module.css';
import Section1 from './Section/Section1.jsx';
import Section2 from './Section/Section2.jsx';
import Features from './Section/Features.jsx';
import { main } from '../../data/main.js';

const Main = () => {
  const { header, subHeader } = main;
  return (
    <>
      <main className={css.main}>
        <h1 className={css.title}>{header}</h1>
        <span>{subHeader}</span>
        <Section1 />
        <Section2 />
        <Features />
      </main>
    </>
  );
};

export default Main;
