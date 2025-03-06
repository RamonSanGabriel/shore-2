import css from './Modal.module.css';
import { gallery } from '../../data/gallery';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const Modal = ({ onClose, currentIndex, prevSlide, nextSlide }) => {
  const { image } = gallery;
  return (
    <div
      className={css.overlay}
      onClick={(e) => {
        if (e.target.className === css.overlay) {
          onClose('clicked outside modal');
        }
      }}
    >
      <div className={css.modalImage}>
        <IoIosArrowDropleft
          className={css.prevSlide}
          onClick={() => prevSlide('prevSlide button')}
        />
        <div className={css.modalImageContainer}>
          <button className={css.closeBtn} onClick={() => onClose('close')}>
            &times;
          </button>
          <img src={gallery[currentIndex].image} alt="gallery" />
        </div>
        <IoIosArrowDropright
          className={css.nextSlide}
          onClick={() => nextSlide('nextSlide button')}
        />
      </div>
    </div>
  );
};

export default Modal;
