import './App.css';
import React from 'react';
import Login from './Components/Login';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from './Components/CheckoutPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="MainPage" element={<Main/>}/>
        <Route path="CheckoutPage" element={<CheckoutPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
