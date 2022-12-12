import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/auth/SignIn'
import Register from './pages/auth/SignUp'
import { AuthContextProvider } from './components/context/AuthContext';
import Account from './pages/auth/Account';
import ProtectedRoute from './components/auth/ProtectedRoute';

//Implement lazy loading
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const AllProducts = React.lazy(() =>
  import('./components/AllProducts/AllProducts')
);
const SingleProduct = React.lazy(() =>
  import('./components/SingleProduct/SingleProduct')
);

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
