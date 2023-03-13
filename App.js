import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Jober from './pages/Jober';
import Login from './pages/Login';
import React,{useState} from 'react';
import Register from './pages/Register';
import RegisterForm from './pages/RegisterForm';
import DomandeService from './pages/DomandeService';
import AdminPage from './pages/AdminPage';
import Forms from './pages/Forms';
import Profile from './pages/Profile';
function App() {
  const [visibilityLoginFrom,setVisibilityLoginForm]=useState(false);
  const [visibilityRegisterForm,setVisibilityRegisterForm]=useState(false);
  return (
    <>
      <BrowserRouter>
        <NavBar visibility={visibilityLoginFrom} setVisibility={setVisibilityLoginForm}/>
        <Login visibility={visibilityLoginFrom} setVisibility={setVisibilityLoginForm}/>
        <RegisterForm visibility={visibilityRegisterForm} setVisibility={setVisibilityRegisterForm}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register visibility={visibilityRegisterForm} setVisibility={setVisibilityRegisterForm}/>}/>
          <Route path='/jober' element={<Jober/>}/>
          <Route path='/domandeService' element={<DomandeService/>}/>
          <Route path='/forms' element={<Forms/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
