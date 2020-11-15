import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Loading from '../Loading'
import Axios from 'axios'
import Comment from  './Comment'
import { Link } from 'react-router-dom'

function Dashboard() {

  const [isLoading, setIsLoading] = useState(true)
  const [Posts,setPosts] = useState([])
  const [motion,setmotion] = useState(false)

  useEffect(() => {
    Axios.get('/api/v1/posts')
      .then(res=>{
        setIsLoading(false)
        setPosts(res.data.posts)

      })
      .catch(err => {
        setIsLoading(false)
        console.log('error')

      })
      return (
        setPosts([])
      )
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setmotion(true)
    }, 1000);
  }, [isLoading])
  
  return isLoading ? <Loading /> : (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <h1 className={`h1 ${motion}`}>Leave a comment !</h1>
        <p className={`p ${motion}`}>your comment helps me to improve better ...</p>
        <div>
          
        </div>
        <Link to='/add_comment' style={{textDecoration: 'none'}}>
          <div className='dashboard__container-button'>
            <h4 className='h4'>Add Comment</h4>
          </div>
        </Link>
        <br/>
        <hr style={{color: 'black' , borderColor: "black"}}/>

        <div className={`dashboard__comments ${motion}`}>
          {Posts.map(post=>{
            return(
            <Comment title={post.title} body={post.body} key={post.id} />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Dashboard
