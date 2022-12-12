import React, { useState, useEffect } from 'react'
import { UserAuth } from '../../components/context/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import { GoogleButton } from 'react-google-button';
import { FacebookLoginButton } from 'react-facebook-login-button';
import styles from './auth.module.css'


const SignIn = () => {
  // const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { signIn, googleSignIn, facebookSignIn, user } = UserAuth()
  const navigate = useNavigate()
  // const handleChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setUser(values => ({...values, [name]: value}))
  //   }

  const handleFacebookLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await facebookSignIn()
    } catch (err) {
      setError(err.message)
      console.log(err.message)
    }
  }

  const handleGoogleLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await googleSignIn()
    } catch (err) {
      setError(err.message)
      console.log(err.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (err) {
      setError(err.message)
      console.log(err.message)
    }
  }
useEffect(() => {
if(user){
  navigate('/')
}
},[user])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" />

        <input type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
        <button type="submit"> Submit Form</button>
        <GoogleButton onClick={handleGoogleLogin} />
        <FacebookLoginButton  />
        <button onClick={handleFacebookLogin}>facebook login</button>

      </form>
      <p>{error}</p>
      <p>Don't have an account? <Link to="/register">Signup</Link></p>
    </div>
  )
}

export default SignIn