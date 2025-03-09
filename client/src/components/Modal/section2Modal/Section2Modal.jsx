import { vicinityMap } from '../../../data/main';
import css from './Section2Modal.module.css';
import { IoCloseSharp } from 'react-icons/io5';

const Section2Modal = ({ onClose }) => {
  const { imageMap } = vicinityMap;
  return (
    <div className={css.overlay}>
      <div className={css.modalImage}>
        <div className={css.modalImageContainer}>
          {' '}
          <IoCloseSharp
            className={css.closeBtn}
            onClick={() => onClose('close')}
          />
          <img src={imageMap} />
        </div>
      </div>
    </div>
  );
};

export default Section2Modal;
