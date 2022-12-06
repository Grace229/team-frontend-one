import React, { useState } from 'react'
import { useEffect } from 'react';
import { UserAuth } from '../../components/context/AuthContext';
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setUser(values => ({...values, [name]: value}))
    //   }
      const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        try {
          await createUser(email, password)  
          navigate('/')
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
      }
     
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* <input type="text"
               name="firstName"
               value={user.firstName}
               onChange={handleChange}
               placeholder="First Name" />

            <input type="text"
               name="lastName"
               value={user.lastName}
               onChange={handleChange}
               placeholder="Last Name" /> */}

             <input type="text"
               name="email"
               onChange={(e) => setEmail(e.target.value) }
               placeholder="Email" />
            
            {/* <input type="text"
               name="phoneNumber"
               value={user.phoneNumber}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Phone Number" /> */}

             <input type="text"
               name="password"
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password" />
               <button  type="submit"> Submit Form</button>

        </form>
        <p>{user.error}</p>

    </div>
  )
}

export default SignUp