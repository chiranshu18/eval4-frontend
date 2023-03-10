import React from 'react';
import { useState } from 'react';
import './fieldNew.css';

const FieldNew = () => {

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
    <div className='add-new-content-field-card' onClick={togglePopup}>
      <p className='add-new-content-field-card-text'>Add Another Field</p>
      {isOpen && <Popup />}
    </div>
  );
};

export default FieldNew;