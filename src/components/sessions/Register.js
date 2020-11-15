import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useProvider } from '../../data/StateProvider'
import ls from 'local-storage'
import './Register.css'
import { TextField } from '@material-ui/core';

function Register() {
  const history= useHistory();

  const [_ , dispatch ] = useProvider();
  const [data, setdata] = useState({username: "" , email: "", password: "" , password_confirmation: ""})
  const [Errors, setErrors] = useState({})
  const [showTrans, setshowTrans] = useState(false)
  const [isLoading,setIsLoading]= useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    Axios.post('/api/v1/new', data)
      .then(res => {
        dispatch({type: 'auth_user' , data: res.data.user})
        ls.set('user' , res.data.user)
        history.replace('/')
      })
      .catch(err=> {
        setIsLoading(false)
        if(err.response?.status===422){
          setErrors({... err.response.data.errors})
        }
      })
  }

  const handleChange = (e) => {
    setdata({...data,[e.target.name]: e.target.value})

  }


  useEffect(() => {
    setshowTrans(true)

  }, [])

  return (
    <div className='login'>
      <div className={`login__card ${showTrans}`}>
        <form className='login__form' onSubmit={handleSubmit} >
          <span>Register</span>
          <small></small>
          <TextField placeholder='Username' autoFocus={true} required={true} onChange={handleChange} name='username' autoComplete='false'/>
          {Errors.username?.length > 0 ? 
            Errors.username.map(error => {
              return <small>Username: {error}</small>
            })
            :null
          }
          <small></small>
          <TextField placeholder='Email' required={true} onChange={handleChange} name='email' autoComplete='false'/>
          {Errors.email?.length > 0 ? 
            Errors.email.map(error => {
              return <small>Email: {error}</small>
            })
            :null
          }
          <small></small>
          <TextField  placeholder='Password' name='password' onChange={handleChange}
          autoComplete='false' type='password' required={true}></TextField>
          {Errors.password?.length > 0 ? 
            Errors.password.map(error => {
              return <small>Password: {error}</small>
            })
            :null
          }
          <small></small>
          <TextField  placeholder='Password Confirmation' name='password_confirmation' onChange={handleChange}
          autoComplete='false' type='password' required={true}></TextField>
          {Errors.password_confirmation?.length > 0 ? 
            Errors.password_confirmation.map(error => {
              return <small>Password: {error}</small>
            })
            :null
          }
          <button type='submit 'className='login__button' disabled={isLoading}>{isLoading? 'Loading' : 'Login'}</button>
        </form>
      </div>
    </div>
  )
}

export default Register
