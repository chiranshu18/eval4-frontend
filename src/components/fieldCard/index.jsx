import React from 'react';
import './fieldCard.css';
import editIcon from '../../assets/icons/edit-icons/icons2.png';
import deleteIcon from '../../assets/icons/delete-icons/icon2.png';


const FieldCard = () => {
  return (
    <div className='field-card'>

      <div className='field-car-logo'>
        <h2>Ab</h2>
      </div>

      <div className='field-card-name'>
        <h2>NAME</h2>
      </div>

      <div className='field-card-data-type'>
        <h2>Text</h2>
      </div>

      <div className='edit-field'>
        <img src={editIcon} alt="" />
      </div>

      <div className='delete-field'>
        <img src={deleteIcon} alt="" />
      </div>

    </div>

    
  );
};

export default FieldCard;