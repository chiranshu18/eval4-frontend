import coverIcon from '../../assets/icons/undraw-upload-re-pasx_2023-03-09/icon1.png';
import React from 'react';
import './login.css';
import { useFormik } from 'formik';
import { UserSchema } from '../../schemas';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Form = () => {
  const navigate = useNavigate();
  const [tokn, setToken] = useState('');

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, action) => {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:4000/register',
      data: values,
    });
    action.resetForm();
    setToken(res.data);
    navigate('/login');
  }; 

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =

    useFormik({
      initialValues: initialValues,
      validationSchema: UserSchema,
      onSubmit,
    });


  return (

    <div className='register-main-div'>

      <div className='cover-image-div'>
        <h1 className='cover-img-heading'>Design APIs fast, <br/>and Manage content easily.</h1>
        <h1></h1>
        <img className='cover-img' src = {coverIcon} alt="coverIcon" />
      </div>

      <div className='app-form-container'>

        <h1>Login to your CMS+ Account</h1>
        <form action='' className='form--container' onSubmit={handleSubmit}>
        
          <input autoComplete='off' type='email' name='email' placeholder='Enter your email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
          {errors.email && touched.email ? ( <p className='form--error'>{errors.email}</p> ) : null}
        
          < input autoComplete='off' type='password' name='password' placeholder='Enter your password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {errors.password && touched.password ? ( <p className='form--error'>{errors.password}</p> ) : null}
        
          <Link to = '/homepage'> <button type='submit' className='button--container'>Login</button> </Link>

        </form>

      </div>

    </div>

  );
};

export default Form;