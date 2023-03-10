import React from 'react';
import './contentType.css';
import ContentTypeCard from '../contentTypeCard';

import { GET_ALL_CONTENT_TYPE } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

const contentTypes = () => {

  const [contentType, setContentType] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_ALL_CONTENT_TYPE)
      .then((response) => {
        setContentType(response.result);
        // setContentType(response.result.fields);
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



  return contentType ? (

    <div className='content-types'>

      <div className='add-new-content-type-card'>
        <p className='add-new-content-type-card-text'>New Types+</p>
      </div>
      
      {
        contentType.map((item) => { 
          return ( <ContentTypeCard key={item.id} name={item.name} /> ); 
        })
      }

    </div>
  ) : (
    <div> Loading... </div>
  );
  
};

export default contentTypes;