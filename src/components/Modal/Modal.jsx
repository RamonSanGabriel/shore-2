import css from './Modal.module.css';
import { gallery } from '../../data/gallery';
import { IoCloseSharp } from 'react-icons/io5';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const Modal = ({ onClose, currentIndex, prevSlide, nextSlide }) => {
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
        <IoIosArrowDropright
          className={css.nextSlide}
          onClick={() => nextSlide('nextSlide button')}
        />
        <div className={css.modalImageContainer}>
          <IoCloseSharp
            className={css.closeBtn}
            onClick={() => onClose('close')}
          />
          <img src={gallery[currentIndex].image} alt="gallery" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
