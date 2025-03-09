import { useState } from 'react';
import { features, storeys, vicinityMap } from '../../../data/main';
import css from './Section.module.css';
import Section2Modal from '../../Modal/section2Modal/section2Modal';

const Section2 = () => {
  const [openModal, setOpenModal] = useState(false);
  const [onClose, setOnClose] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { titleMap, imageMap, contentMap, address, id } = vicinityMap;

  const handleOpenModal = (id) => {
    // setCurrentIndex(id - 1);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <section className={css.section}>
      {openModal ? (
        <Section2Modal
          // id={id}
          image={imageMap}
          // currentIndex={currentIndex}
          setOpenModal={handleOpenModal}
          // setCurrentIndex={setCurrentIndex}
          onClose={handleModalClose}
        />
      ) : (
        <div>
          <h2 className={css.title}>{titleMap}</h2>
          <address className={css.address}>{address}</address>
          <img
            className={(css.facade, css.facadeMap)}
            onClick={handleOpenModal}
            src={imageMap}
          />
          <p className={(css.content, css.contentMap)}>{contentMap}</p>
        </div>
      )}
    </section>
  );
};

export default Section2;
