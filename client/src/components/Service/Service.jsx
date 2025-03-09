import css from './Service.module.css';
import { service, unitDescription } from '../../data/service.js';

const Service = () => {
  const { title, description } = service;
  return (
    <div className={css.serviceWrapper}>
      <h1>{title}</h1>
      <hr />
      <p>{description}</p>
      <ul className={css.serviceList}>
        <h3>Unit Description: </h3>
        {unitDescription.map(({ id, unitDescription }) => (
          <div key={id}>
            <li className={css.serviceList}>
              <p>{unitDescription}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Service;
