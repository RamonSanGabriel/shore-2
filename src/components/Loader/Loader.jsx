// import { RotatingLines } from 'react-loader-spinner';
import { BeatLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <BeatLoader color="#3974d8" size={30} />
    </div>
  );
};

export default Loader;
