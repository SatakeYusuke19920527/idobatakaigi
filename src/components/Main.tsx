import React from 'react';
import { MainPropType } from '../types/MainPropType';
const Main: React.FC<MainPropType> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Main;
