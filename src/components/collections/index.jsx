import React from 'react';
import './collection.css';
import searchIcon from '../../assets/icons/search-icons/icon1.png';
import { Link } from 'react-router-dom';

import { GET_ALL_CONTENT_TYPE } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import CollectionData from '../collectionData';

const index = () => {

  const [collectionType, setCollectionType] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_ALL_CONTENT_TYPE)
      .then((response) => {
        setCollectionType(response.result);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);


  if(error){
    return (
      <div >
        <p>{error}</p>
      </div>
    );
  };

  
  return collectionType ? (
    <div className='collections'>

      <div className='cms-heading'>
        <h1>CMS+</h1>
      </div>

      <div className='collection-heading'>
        <h2>Collection types</h2>
        <img className='icon' src = {searchIcon} alt="search icon" />
      </div>

      <div className='collection-types'>

        {
          collectionType.map((item) => { 
            return ( <CollectionData key={item.id} name={item.name} /> ); 
          })
        }

      </div>

      <div className='content-builder'>
        <h2>CONTENT TYPE BUILDER</h2>
      </div>
      
    </div>
  ) : (
    <div> Loading... </div>
  );
};

export default index;