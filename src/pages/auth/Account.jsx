import React, { useState } from 'react'
import { UserAuth } from '../../components/context/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.css"


const Account = () => {
    // const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [displayName, setDisplayName] = useState('');
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
          await createUser(email, password, displayName, phoneNumber)  
          navigate('/')
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
      }
     
  return (
    <div>
        <form className={styles.form} onSubmit={handleSubmit}>

            <input type="text"
               name="userName"
               onChange={(e) => setDisplayName(e.target.value) }
               placeholder="User Name" />

             <input type="text"
               name="email"
               onChange={(e) => setEmail(e.target.value) }
               placeholder="Email" />
            
            <input type="text"
               onChange={(e) => setPhoneNumber(e.target.value)}
               placeholder="Phone Number" />

             <input type="text"
               name="password"
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password" />
               <button  type="submit"> Submit Form</button>

        </form>
        <p>{error}</p>
<p>Alreaady have an account? <Link to="/login">login</Link></p>
    </div>
  )
}

export default Account