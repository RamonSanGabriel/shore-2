import css from './About.module.css';
import { about } from '../../data/about';

const About = () => {
  const { title, description } = about;
  return (
    <div className={css.aboutWrapper}>
      <h1>{title}</h1>
      <hr />
      <p className={css.aboutDescription}>{description}</p>
    </div>
  );
};

export default About;
