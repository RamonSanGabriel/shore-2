import { useState } from 'react';
import { gallery } from '../../data/gallery';
import css from './Gallery.module.css';
import Modal from '../Modal/Modal';

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [modalClose, setModalClose] = useState(true);

  const { id } = gallery;

  const handleOpenModal = (id) => {
    setCurrentIndex(id);
    setModal(true);
  };
  console.log(handleOpenModal);

  const handleModalClose = (value) => {
    setModal(false);
    setCurrentIndex(value);
  };

  return (
    <div className={css.galleryWrapper}>
      {modal ? (
        <Modal onClose={handleModalClose} id={id} />
      ) : (
        <ul className={css.galleryList}>
          {gallery &&
            gallery.map(({ id, title, image, description }) => (
              <div className={css.galleryListContainer} key={id}>
                <li className={css.galleryItems}>
                  <h3 className={css.galleryTitle}>{title}</h3>
                  <img
                    src={image}
                    alt={title}
                    onClick={() => handleOpenModal(id)}
                  />
                  <p>{description}</p>
                </li>
              </div>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Gallery;
