import { features } from '../../../data/main';
import Amenities from './Amenities';
import Facilities from './Facilities';
import css from './Section.module.css';
import Services from './Services';
import Storeys from './Storeys';

const Features = () => {
  const { title, propertySize, buildings } = features;
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {/* <hr /> */}
      {/* <p className={css.content}>{description}</p> */}
      <p className={css.featureList}>
        Property size: <span>{propertySize}</span>
      </p>
      <p className={css.featureList}>
        Number of Buildings: <span>{buildings}</span>
      </p>
      <Storeys />
      <Facilities />
      <Services />
      <Amenities />
    </section>
  );
};

export default Features;
