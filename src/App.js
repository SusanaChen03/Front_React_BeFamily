import "./App.css";
import "./css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Onboarding from "./components/Onboarding/Onboarding";
import Register from "./containers/Register/Register";
import Header from "./components/Header/Header";
import Login from "./containers/Login/Login";
import RegisterMember from "./containers/RegisterMember/RegisterMember";
import AddNewMember from "./containers/AddNewMember/AddNewMember";
import CreateChallenge from "./containers/CreateChallenge/CreateChallenge";
import ListChallengers from "./containers/ListChallengers/ListChallengers";
import Profile from "./containers/Profile/Profile";
import ListRewards from "./containers/ListRewards/ListRewards";
import CreateReward from "./containers/CreateReward/CreateReward";
import Home from "./containers/Home/Home";
import ProtectedRoute from "./Midleware/ProtectedRoute";
import PopUp from "./components/PopUp/PopUp";
import Loading from "./components/Loading/Loading";

function App() {

  const [logged, setLogged] = useState(false);
  const popupState = useSelector((state) => state.popup); 
  const loading = useSelector(state => state.loading)

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute isLoggedIn={logged}> <Home /></ProtectedRoute>}/>
          <Route path="/listChallenges" element={ <ProtectedRoute isLoggedIn={logged}> <ListChallengers /></ProtectedRoute>}/>
          <Route path="/listRewards" element={<ProtectedRoute isLoggedIn={logged}><ListRewards /></ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute isLoggedIn={logged}><Profile /></ProtectedRoute>}/>
          <Route path="/createChallenge"element={<ProtectedRoute isLoggedIn={logged}><CreateChallenge /> </ProtectedRoute>}/>
          <Route path="/createChallenge/:id" element={<ProtectedRoute isLoggedIn={logged}><CreateChallenge /></ProtectedRoute>}/>
          <Route path="/createReward" element={<ProtectedRoute isLoggedIn={logged}><CreateReward /></ProtectedRoute>}/>
          <Route path="/createReward/:id" element={<ProtectedRoute isLoggedIn={logged}><CreateReward /></ProtectedRoute>}/>
          <Route path="/addMember"element={<ProtectedRoute isLoggedIn={logged}><AddNewMember /></ProtectedRoute>}/>
          <Route path="/addMember/:id"element={<ProtectedRoute isLoggedIn={logged}><AddNewMember /></ProtectedRoute>}/>
        </Routes>
        {loading && <Loading />} 
        {popupState.visibility && <PopUp />}
      </BrowserRouter>
    </div>
  );
}

export default App;
