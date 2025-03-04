import css from './Modal.module.css';
import { gallery } from '../../data/gallery';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const Modal = ({ onClose, currentIndex }) => {
  // const handleKeyPress = (e) => {
  //   if (e.key === 'Escape') {
  //     onClose('close using ESC key');
  //   }
  // };
  return (
    <div
      className={css.overlay}
      // onKeyDown={() => handleKeyPress()}
      onClick={(e) => {
        if (e.target.className === css.overlay) {
          onClose('clicked outside modal');
        }
      }}
    >
      {/* <div className={css.modal}> */}
      <div className={css.modalImage}>
        <IoIosArrowDropleft className={css.prevSlide} />
        <div className={css.modalImageContainer}>
          <button className={css.closeBtn} onClick={() => onClose('close')}>
            &times;
          </button>
          <img src={gallery[currentIndex - 1].image} alt="gallery" />
        </div>
        <IoIosArrowDropright className={css.nextSlide} />
      </div>
    </div>
  );
};

export default Modal;
