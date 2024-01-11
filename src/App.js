import './App.css';
import React from 'react';

import Login from './Components/Login';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from './Components/CheckoutPage';
import UploadData from './Components/UploadData';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="CheckoutPage" element={<CheckoutPage />} />
        <Route path="Files" element={<UploadData />} />
        <Route path="MainPage" element={<Main/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
