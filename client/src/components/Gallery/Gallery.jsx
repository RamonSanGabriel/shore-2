import { useState } from 'react';
import { gallery } from '../../data/gallery';
import css from './Gallery.module.css';
import Modal from '../Modal/Modal';

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [modalClose, setModalClose] = useState(true);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleModalClose = (value) => {
    setModalClose(false);
    setModal(value);
  };

  return (
    <div className={css.galleryWrapper}>
      {modal ? (
        <Modal
          setModal={setModal}
          onClose={handleModalClose}
          modalClose={modalClose}
        />
      ) : (
        <ul className={css.galleryList}>
          {gallery.map(({ id, title, image, description }) => (
            <div className={css.galleryListContainer} key={id}>
              <li className={css.galleryItems}>
                <h3 className={css.galleryTitle}>{title}</h3>
                <img src={image} alt={title} onClick={handleOpenModal} />
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
