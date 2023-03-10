import React from 'react';
import './contentType.css';
import ContentTypeCard from '../contentTypeCard';
import ContentTypeNew from '../contentTypeNew';

import { GET_ALL_CONTENT_TYPE } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

const contentTypes = () => {

  const [contentType, setContentType] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_ALL_CONTENT_TYPE)
      .then((response) => {
        setContentType(response.result);
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

  const getInfo = () => {
    console.log('clicked');
  };


  return contentType ? (

    <div className='content-types'>

      <ContentTypeNew/>
      
      {
        contentType.map((item) => { 
          return ( <ContentTypeCard key={item.id} name={item.name} handleClick = {getInfo}/> ); 
        })
      }

    </div>
  ) : (
    <div> Loading... </div>
  );
  
};

export default contentTypes;