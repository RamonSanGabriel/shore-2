import { scrollAnimation } from '../../data/scroll';
import css from './Scroll.module.css';

const Scroll = () => {
  return (
    <div className={css.container}>
      {scrollAnimation.map(({ id, name, description, image }) => (
        <div key={id}>
          <li>
            <img src={image} alt={description} />
            <h3>{name}</h3>
            <p>{description}</p>
          </li>
        </div>
      ))}
    </div>
  );
};

export default Scroll;
