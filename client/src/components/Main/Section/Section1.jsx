import { main } from '../../../data/main';
import css from './Section.module.css';

const Section1 = () => {
  const { title, content, image } = main;

  return (
    <section className={css.section}>
      <h4 className={css.title}>{title}</h4>
      <img className={css.facade} src={image} />
      <p className={css.content}>{content}</p>
    </section>
  );
};

export default Section1;
