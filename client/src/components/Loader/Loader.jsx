import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        strokeColor="hsl(210, 100%, 56%)"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        // wrapperStyle={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   placeItems: 'center',
        // }}
        // wrapperClass="loader"
      />
    </div>
  );
};

export default Loader;
