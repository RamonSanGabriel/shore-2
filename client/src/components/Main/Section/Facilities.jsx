import React from 'react';
import { facilities } from '../../../data/main';
import css from './Section.module.css';

const Facilities = () => {
  const { title, a, b, c, d, e, f, g } = facilities;
  return (
    <div>
      <h3>{title}</h3>
      <ul className={css.featureList}>
        <li>{a} </li>
        <li>{b}</li>
        <li>{c}</li>
        <li>{d}</li>
        <li>{e}</li>
        <li>{f}</li>
        <li>{g}</li>
      </ul>
    </div>
  );
};

export default Facilities;
