import React from 'react';
import Registration from './pages/Registration';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TypeDetail from './pages/typeDetailPage';

const App = () => {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/typeDetail" element={<TypeDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
};

export default App;
