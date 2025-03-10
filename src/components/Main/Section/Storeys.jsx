import { storeys } from '../../../data/main';
import css from './Section.module.css';

const Storeys = () => {
  return (
    <>
      <h3>Number of Storeys</h3>
      <ul className={css.featureList}>
        {storeys.map(({ id, tower, floors }) => (
          <li key={id}>
            {tower}: <span>{floors}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Storeys;
