import { service } from '../../data/service';

const Service = () => {
  const { title, description } = service;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Service;
