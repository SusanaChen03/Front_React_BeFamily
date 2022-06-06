
import './App.css'
import './css/bootstrap.min.css';
import boots from 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Onboarding from './components/Onboarding/Onboarding';
import Register from './containers/Register/Register';
import Header from './components/Header/Header';
import Login from './containers/Login/Login';
import RegisterMember from './containers/RegisterMember/RegisterMember';
import AddNewMember from './containers/AddNewMember/AddNewMember';
import CreateChallenge from './containers/CreateChallenge/CreateChallenge';
 
import ListChallengers from './containers/ListChallengers/ListChallengers';
import Profile from './containers/Profile/Profile';
import ListRewards from './containers/ListRewards/ListRewards';
import CreateReward from './containers/CreateReward/CreateReward';
import Home from './containers/Home/Home';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Onboarding/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/listChallenges' element={<ListChallengers/>} />
        <Route path='/listRewards' element={<ListRewards/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/createChallenge' element={<CreateChallenge/>} />
        <Route path='/createReward' element={<CreateReward/>} />
        <Route path='/addMember' element={<AddNewMember/>} />





      </Routes>
      </BrowserRouter>
     
      
    

    </div>


  );
}

export default App;
