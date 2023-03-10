import React from 'react';
import './collection.css';
import searchIcon from '../../assets/icons/search-icons/icon1.png';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className='collections'>

      <div className='cms-heading'>
        <h1>CMS+</h1>
      </div>

      <div className='collection-heading'>
        <h2>Collection types</h2>
        <img className='icon' src = {searchIcon} alt="search icon" />
      </div>

      <div className='collection-types'>
        <Link to = '/typeDetail'> <button className='collection-type-button'> <h2>company profile</h2> </button> </Link> 
        <Link to = '/typeDetail'><button className='collection-type-button'> <h2>idv functionals</h2></button></Link>
        <Link to = '/typeDetail'><button className='collection-type-button'> <h2>trials</h2> </button></Link>
        <Link to = '/typeDetail'><button className='collection-type-button'><h2>users</h2></button></Link>
        <Link to = '/typeDetail'><button className='collection-type-button'><h2>parties</h2></button></Link>
        <Link to = '/typeDetail'><button className='collection-type-button'><h2>events</h2></button></Link>
      </div>

      <div className='content-builder'>
        <h2>CONTENT TYPE BUILDER</h2>
      </div>
      
    </div>
  );
};

export default index;