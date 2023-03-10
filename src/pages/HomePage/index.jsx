import React from 'react';
import './homepage.css';
import Collection from '../../components/collections';
import Content from '../../components/content';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Collection/>
      <Content/>
    </div>
  );
};

export default HomePage;