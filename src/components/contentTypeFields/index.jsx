import React from 'react';
import './contentTypeFields.css';
import FieldCard from '../fieldCard';
import FieldNew from '../fieldNew';

const companyTypeFields = () => {
  return (
    <div className='contenet-type-fields'> 

      <div className='field-description'>

        <div className='content-type-field-title'>
          <h1>Company_Profiles</h1>
        </div>

        <div className='content-type-field-subtitle'>
          <h2>13 Fields</h2>
        </div>

      </div>

      {/* <div className='add-new-content-field-card'>
        <p className='add-new-content-field-card-text'>Add Another Field</p>
      </div> */}

      <FieldNew/>
      <FieldCard/>
      

    </div>
  );
};

export default companyTypeFields;