import css from './Modal.module.css';
import { useState, useEffect } from 'react';

const Modal = ({ onClose, showModal, modalClose }) => {
  // const [modalClose, setModalClose] = useState(true);
  // useEffect(() => {
  //   if (showModal) document.body.style.overflow = 'hidden';
  //   else document.body.style.overflow = 'visible';
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [showModal]);

  return (
    // modalClose && (
    <div className={css.modal}>
      <button onClick={() => onClose()}>&times;</button>
      <div className={css.modalHeader}>
        <h2>Modal</h2>
      </div>
      <div className={css.modalBody}>
        <p>Modal content</p>
      </div>
    </div>
    // )
  );
};

export default Modal;
