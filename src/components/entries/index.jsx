import React from 'react';
import './entries.css';
import EntryCard from '../entryCard';

import deleteIcon from '../../assets/icons/delete-icons/icon1.png';
import searchIcon from '../../assets/icons/search-icons/icon1.png';

const index = () => {
  return (
    <div className='entries'>

      <div className='entries-title'>
        <h1 className='total-entries'>13 Entries Found</h1>
        <h2>Add New Entry</h2>
      </div>

      <div className='head-entry-card'>

        <div className='entry-id'>
          <p>id</p>
        </div>

        <div className='entry-name'>
          <p>name</p>
        </div>

        <div className='entry-website'>
          <p>website</p>
        </div>

        <div className='entry-contact'>
          <p>contact</p>
        </div>

        <div className='entry-actions'>
          actions
        </div>

      </div>

      <div className='all-entry-cards'>
        <EntryCard />
      </div>
      

    
    
    </div>
  );
};

export default index;