// import { RotatingLines } from 'react-loader-spinner';
import { BeatLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      {/* <h2>Loading...</h2> */}
      <BeatLoader color="#3974d8" size={20} />
    </div>
  );
};

export default Loader;
