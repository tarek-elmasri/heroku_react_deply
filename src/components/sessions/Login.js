import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useProvider } from '../../data/StateProvider'
import ls from 'local-storage'
import './login.css'
import { TextField } from '@material-ui/core';

function Login() {
  const history= useHistory();

  const [_ , dispatch ] = useProvider();
  const [data, setdata] = useState({email: "", password: ""})
  const [Errors, setErrors] = useState(false)
  const [showTrans, setshowTrans] = useState(false)
  const [isLoading,setIsLoading]= useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    Axios.get('/api/v1/auth_by_email',{params: data})
      .then(res => {
        dispatch({type: 'auth_user' , data: res.data.user})
        ls.set('user' , res.data.user)
        history.replace('/')
      })
      .catch(err=> {
        setIsLoading(false)
        if(err.response?.status===401){
          setErrors(true)
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
          <span className='span'>Login</span>
          
          <small></small>
          {Errors && <small>* Wrong E-mail or password</small>}
          <TextField placeholder='Email' autoFocus={true} required={true} onChange={handleChange} name='email' autoComplete='false'/>
          <small></small>
          <TextField  placeholder='Password is required' name='password' onChange={handleChange}
          autoComplete='false' type='password' required={true}></TextField>

          <button type='submit 'className='login__button' disabled={isLoading}>{isLoading? 'Loading' : 'Login'}</button>
        </form>
      </div>
    </div>
  )
}

export default Login

