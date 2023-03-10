import React from 'react';
import './contentType.css';
import ContentTypeCard from '../contentTypeCard';


const contentTypes = () => {
  return  (

    <div className='content-types'>

      <div className='add-new-content-type-card'>
        <p className='add-new-content-type-card-text'>New Types+</p>
      </div>

      <ContentTypeCard/>


    </div>
  );
  
};

export default contentTypes;