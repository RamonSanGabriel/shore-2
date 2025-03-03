import css from './Modal.module.css';
import { useState } from 'react';
import { gallery } from '../../data/gallery';
import gallery1 from '../../images/gallery/img1.jpg';

const Modal = ({ onClose }) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { image, id, title } = gallery;

  // const [modalClose, setModalClose] = useState(true);
  // useEffect(() => {
  //   if (showModal) document.body.style.overflow = 'hidden';
  //   else document.body.style.overflow = 'visible';
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [showModal]);

  return (
    !isModalOpen && (
      <div className={css.modal}>
        <button onClick={() => onClose()}>&times;</button>
        <div className={css.modalHeader}>
          <h2>Modal</h2>
        </div>
        <div className={css.modalBody}>
          <p>Modal content</p>
          <img src={gallery1} />
          {/* `
          <img
            src="${image == null ? `https://placehold.co/400x600`:  `image`}"
            alt="${title}"
          />
          ` */}
          {/* <img src={image} /> */}
        </div>
      </div>
    )
  );
};

export default Modal;
