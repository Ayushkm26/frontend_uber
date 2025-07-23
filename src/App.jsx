import React from 'react';
import { Route ,Routes} from 'react-router-dom';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';    
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';
import { useContext } from 'react';
import { UserDataContext } from './context/Usercontext';
import Start from './pages/Start';
import Home from './pages/Home';
 import UserProtectedWrapper from './pages/UserProtectedWrapper';  
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectedWrarapper from './pages/CaptainProtectedWrarapper';
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
         </UserProtectedWrapper> } />
        <Route path="/user/logout" element={<UserProtectedWrapper>
           <UserLogout />
         </UserProtectedWrapper>}/>
          <Route path="/captain-home" element={
          <CaptainProtectedWrarapper>
            <CaptainHome/>
         </CaptainProtectedWrarapper> } />
      </Routes>
    </>
  )
}

export default App
