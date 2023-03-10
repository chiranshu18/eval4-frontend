import React from 'react';
import './contentTypeCard.css';

const index = ({name, handleClick}) => {
  return (
    <>
      
      <div className='content-type-card' onClick={handleClick}>
        <p className='add-new-content-type-card-text'>{name}</p>
        <p className='add-new-content-type-card-text'></p>
      </div>
    </>  
    
    
  );
};

export default index;