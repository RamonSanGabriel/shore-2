import { useState } from 'react';
import { gallery } from '../../data/gallery';
import css from './Gallery.module.css';
import Modal from '../Modal/Modal';

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { id, image } = gallery;

  const handleOpenModal = (id) => {
    setCurrentIndex(id - 1);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(gallery.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextSlide = () => {
    if (currentIndex === gallery.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <>
      {openModal ? (
        <Modal
          onClose={handleModalClose}
          id={id}
          image={image}
          currentIndex={currentIndex}
          setOpenModal={handleModalClose}
          setCurrentIndex={setCurrentIndex}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
      ) : (
        <div className={css.galleryWrapper}>
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
        </div>
      )}
    </>
  );
};

export default Gallery;
