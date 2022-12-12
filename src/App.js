import React from 'react';
import Login from './pages/auth/SignIn'
import Register from './pages/auth/SignUp'
import Home from './pages/index'
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';
import Account from './pages/auth/Account';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <>
   <AuthContextProvider>
   <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<ProtectedRoute><Account /></ProtectedRoute>} />

        </Routes>
   </AuthContextProvider>
   
        
    </>
  );
}

export default App;
