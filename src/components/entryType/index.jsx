import React from 'react';
import './entryType.css';
import Entries from '../../components/entries';

const index = () => {
  return (
    <div>

      <div className='entry-type-heading'>
        <h1>Company_profiles</h1>
      </div>

      <div>
        <Entries/>
      </div>


    </div>
  );
};

export default index;