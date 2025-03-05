import css from './Modal.module.css';
import { gallery } from '../../data/gallery';

const Modal = ({ onClose, currentIndex }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      onClose('close using ESC key');
    }
  };
  return (
    // !isModalOpen && (
    // <div className={css.overlay}>
    <div
      className={css.overlay}
      onKeyDown={() => handleKeyPress()}
      onClick={(e) => {
        if (e.target.className === css.overlay) {
          console.log('clicked outside modal');
        }
      }}
    >
      {/* <div className={css.modal}> */}
      <div className={css.modalImage}>
        <button className={css.closeBtn} onClick={() => onClose('close')}>
          &times;
        </button>
        {/* <p>Modal content</p> */}
        <img src={gallery[currentIndex - 1].image} alt="gallery" />
      </div>
      {/* </div> */}
    </div>
    // </div>
    // )
  );
};

export default Modal;
