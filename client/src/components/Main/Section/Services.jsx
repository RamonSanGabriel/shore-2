import { services } from '../../../data/main';
import css from './Section.module.css';

const Services = () => {
  const { title, a, b, c, d } = services;
  return (
    <>
      <h3>{title}</h3>
      <ul className={css.featureList}>
        <li>{a}</li>
        <li>{b}</li>
        <li>{c}</li>
        <li>{d}</li>
      </ul>
    </>
  );
};

export default Services;
