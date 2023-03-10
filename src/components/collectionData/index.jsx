import React from 'react';
import { Link } from 'react-router-dom';

const index = ({name}) => {
  return (
    <>
      <Link to = '/typeDetail'><button className='collection-type-button'> <h2>{name}</h2></button></Link>
    </>
  );
};

export default index;