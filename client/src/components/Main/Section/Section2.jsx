import { features, storeys, vicinityMap } from '../../../data/main';
import css from './Section.module.css';

const Section2 = () => {
  const { titleMap, imageMap, contentMap, address } = vicinityMap;
  // const { tower, floors } = storeys;
  return (
    <section className={css.section}>
      <h2 className={css.title}>{titleMap}</h2>
      <address className={css.address}>{address}</address>
      <img className={(css.facade, css.facadeMap)} src={imageMap} />
      <p className={(css.content, css.contentMap)}>{contentMap}</p>
    </section>
  );
};

export default Section2;
