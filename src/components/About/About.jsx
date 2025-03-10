import css from './About.module.css';
import { about } from '../../data/about';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
