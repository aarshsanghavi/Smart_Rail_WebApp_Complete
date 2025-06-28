import { useState, useEffect } from 'react';
import './App.css';
import Home from "./pages/Home";
import FindTrain from "./pages/findtrain";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import AuthNavBar from "./components/AuthNavBar";
import Trains from "./pages/DisplayTrain";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import EmailVerification from "./pages/EmailVerification";
import Profile from "./pages/profile";
import { isAuthenticated } from "./AuthContext";

function DisplayTrainWrapper() {
  const { state } = useLocation(); // Access state passed from navigate
  return <Trains mode={state?.mode} details={state?.details} />;
}

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false); // Track user auth status

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      setIsUserAuthenticated(authenticated);
    };
    checkAuth();
  }, []);

  return (
    <main className="main-content">
      {/* Conditional rendering of NavBar based on authentication */}
      {isUserAuthenticated ? <AuthNavBar /> : <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findtrain" element={<FindTrain />} />
        {/* <Route path="/Signup" element={<Signup />} /> */}
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/Logout" element={<Logout />} /> */}
        <Route path="/traindetails" element={<DisplayTrainWrapper />} />
        <Route path="/Emailverification" element={<EmailVerification />} />


        
        <Route
          path="/Signup"
          element={isUserAuthenticated ? <FindTrain /> : <Signup />}
        />


        <Route
          path="/Login"
          element={isUserAuthenticated ? <FindTrain /> : <Login />}
        />


        <Route
          path="/profile"
          element={isUserAuthenticated ? <Profile /> : <Login />}
        />

         <Route
          path="/Logout"
          element={isUserAuthenticated ? <Logout /> : <Login />}
        />

      </Routes>
    </main>
  );
}

export default App;
