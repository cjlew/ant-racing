import React from 'react';
import Ants from './ants.jsx';

const AntsContainer = ({ data: {loading, error, ants }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  else if (error) {
    return <p>{error.message}</p>;
  }
  else {
    return (
        <div>
          <Ants ants={ants} />
        </div>
      );
  }
 };

 export default AntsContainer;
