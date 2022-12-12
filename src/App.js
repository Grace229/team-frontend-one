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
    <Layout>
      <Suspense fallback={<div className='loading'><p>Loading...</p></div>}>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/" element={<Navigate to="/all-products" />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/cart" />
          <Route path="/checkout" />
          <Route path="/review" />
          <Route path="/contact" />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Suspense>
    </Layout>
    </AuthContextProvider>
    </>
  );
}

export default App;
