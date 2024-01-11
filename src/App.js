import './App.css';
import React from 'react';
import Headers from './Components/Headers';
import Login from './Components/Login';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from './Components/CheckoutPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="CheckoutPage" element={<CheckoutPage />} />
        <Route path="MainPage" element={<Main/>}/>
        <Route path="Headers" element={<Headers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
