import { gallery } from '../../data/gallery';
import css from './Gallery.module.css';

const Gallery = () => {
  return (
    <div className={css.galleryContainer}>
      <ul className={css.galleryList}>
        {gallery.map(({ id, title, image, description }) => (
          <div className={css.galleryListContainer} key={id}>
            <li className={css.galleryItems}>
              <h3>{title}</h3>
              <img src={image} alt={title} />
              <p>{description}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
