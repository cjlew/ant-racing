import React from 'react';
import './../stylesheets/AntsInfo.css';

const AntInfo = ({ant, i}) => {
  return (
    <li className='ant-info'>
      <h3>{ant.name}</h3>
      <div className='ant-stats'>
        <div className='ant-properties'>
          <p>Length: {ant.length}</p>
          <p>Weight: {ant.weight}</p>
          <p>Color: {ant.color}</p>
          <p>Win Probability: </p>
        </div>
        <div className='ant-color-circle' style={{backgroundColor: ant.color}} />
      </div>
    </li>
  );
};

export default AntInfo;
