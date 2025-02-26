import { vicinityMap } from '../../../data/main';
import css from './Section.module.css';

const Section2 = () => {
  const { titleMap, imageMap, contentMap } = vicinityMap;
  return (
    <section className={css.section}>
      <h4 className={css.title}>{titleMap}</h4>
      <img className={(css.facade, css.facadeMap)} src={imageMap} />
      <p className={(css.content, css.contentMap)}>{contentMap}</p>
    </section>
  );
};

export default Section2;
