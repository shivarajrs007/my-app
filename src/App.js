import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import MainPage from './Components/MainPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
