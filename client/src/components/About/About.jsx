import React from 'react';
import { about } from '../../data/about';

const About = () => {
  const { title, description } = about;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default About;
