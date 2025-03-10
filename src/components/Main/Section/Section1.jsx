import { main } from '../../../data/main';
import css from './Section.module.css';

const Section1 = () => {
  const { title, content, image } = main;

  return (
    <>
      <section className={css.section}>
        <h2 className={css.title}>{title}</h2>
        <img className={css.facade} src={image} />
        <p className={css.content}>{content}</p>
      </section>
    </>
  );
};

export default Section1;
