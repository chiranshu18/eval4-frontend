import React from 'react';
import './contentTypeCard.css';

const index = ({name, fields}) => {
  return (
    <>
      
      <div className='content-type-card'>
        <p className='add-new-content-type-card-text'>{name}</p>
        <p className='add-new-content-type-card-text'></p>
      </div>
    </>  
    
    
  );
};

export default index;