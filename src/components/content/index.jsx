import React from 'react';
import './content.css';
import ContentTypes from '../../components/contentTypes';
import ContentTypeFields from '../companyTypeFields';

const content = () => {
  return (
    <div>
      
      <div className='content-heading'>
        <h1>Content Types</h1>
      </div>

      <div className='data'>
        <ContentTypes/>
        <ContentTypeFields/>
      </div>


    </div>
  );
};

export default content;