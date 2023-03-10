import React from 'react';
import './entries.css';
import EntryCard from '../entryCard';
import { useState } from 'react';

import deleteIcon from '../../assets/icons/delete-icons/icon1.png';
import searchIcon from '../../assets/icons/search-icons/icon1.png';

const index = () => {


  const [isOpen, setIsOpen] = useState(false);
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  function Popup() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      togglePopup();
    };

    return (
      <div className="popup2">
        <h1>Add Enteries</h1>
        <form >
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          <input className='input-content-type2' type="text" value={inputValue} onChange={handleInputChange} />
          
        </form>
        <div className='buttons2'>
          <button className='create-button2' type="submit" onSubmit={handleSubmit}>create</button>
          <button className='cancel-button2' type="submit" onSubmit={handleSubmit}>cancel</button>
        </div>
      </div>
    );
  };


  return (
    <div className='entries'>

      <div className='entries-title' onClick={togglePopup}>
        <h1 className='total-entries'>13 Entries Found</h1>
        <h2>Add New Entry</h2>
        {isOpen && <Popup />}
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