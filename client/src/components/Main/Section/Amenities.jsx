import css from './Section.module.css';
import { amenities } from '../../../data/main';

const Amenities = () => {
  const { title, a, b, c, d, e } = amenities;
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

export default Amenities;
