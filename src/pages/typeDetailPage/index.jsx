import React from 'react';
import './typeDetailPage.css';
import Collection from '../../components/collections';
import EntryType from '../../components/entryType';

const index = () => {
  return (
    <div className = 'typeDetailPage'>
      <Collection/>
      <EntryType/>
    </div>
  );
};

export default index;