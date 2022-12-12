import React, { useState } from 'react'
import { UserAuth } from '../../components/context/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.css"


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()
 
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
        <form className={styles.form} onSubmit={handleSubmit}>

             <input type="text"
               onChange={(e) => setEmail(e.target.value) }
               placeholder="Email" />
        
             <input type="text"
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password" />
               <button  type="submit"> Submit Form</button>

        </form>
        <p>{error}</p>
<p>Alreaady have an account? <Link to="/login">login</Link></p>
    </div>
  )
}

export default SignUp