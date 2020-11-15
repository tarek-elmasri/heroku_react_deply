import { TextField } from '@material-ui/core'
import Axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {useProvider} from '../../data/StateProvider'
import './AddComment.css'

function AddComment() {

  const[{User} , dispatch] = useProvider();
  const history = useHistory();
  
  const [comment,setComment] =useState({title: "" , body: "" , token: User?.token})
  const [isLoading,setIsLoading]= useState(false)
  const [Errors,setErrors] = useState({active:false,msg:'Both fields are required.'})
  function handleChange(e){
    setComment({...comment,[e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();

    if(comment.title ==='' || comment.body=== ''){
      setErrors({...Errors , active:true})
      return
    }
    
    setIsLoading(true)
    Axios.post('/api/v1/posts', {...comment , token: User.token})
      .then(() => {
        history.push('/dashboard')

      })
      .catch(err =>{
        setIsLoading(false)
        console.log(err.response.data.errors)
        setErrors({active:true , msg: 'Error responding from server.'})
      })
  }

  return (
    <div className='comment'>
      <div className='comment__container'>
        
        <h1>New Comment</h1>
        <br/>
        <hr style={{color: 'black' , borderColor: "black"}}/>

        <div className='comment__tools'>
          <form onSubmit={handleSubmit}>
            {Errors.active ? <small style={{fontStyle: 'italic' , color: 'red'}}>{Errors.msg}<br/></small> : null }
            <span>Title: </span><br/>
            <input className='comment__tools-title' type='text' 
              name='title' onChange={handleChange} autoFocus={true}
              placeholder='title' /><br/><br/>
            <span>Comment:</span><br/>
            <textarea rows='5' name='body' onChange={handleChange} /><br/><br/>
            <button type='submit' className='comment__button' disabled={isLoading}>{isLoading? 'Loading' : 'Save'}</button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default AddComment
