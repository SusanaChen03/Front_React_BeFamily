
import './App.css'
import './css/bootstrap.min.css';
import boots from 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Onboarding from './components/Onboarding/Onboarding';
import Register from './containers/Register/Register';
import Header from './components/Header/Header';
import Login from './containers/Login/Login';
import RegisterMember from './containers/RegisterMember/RegisterMember';

function App() {

  return (
    <div className='app'>
      <Header/>
      <RegisterMember/>
    
    </div>


  );
}

export default App;
