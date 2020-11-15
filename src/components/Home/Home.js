import React, { useEffect, useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import './home.css'
import { useHistory } from 'react-router-dom';
function Home() {

  const [motion, setmotion] = useState(false)
  const history=useHistory();

  useEffect(() => {
    setmotion(true)
  }, [])
  
  return (
    <div className={`home ${motion}`}>
      <div className='home__container'>
        <img className='home__img'
          src='https://images.unsplash.com/photo-1581893106728-1e2197903b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          alt='home_img'
        ></img>

        <div className='home__header'>
          <h1 className='home__header-title'>My Journey in Web Development</h1>
          <p>step by step for professionality</p>
          <div className='home__header-buttons'>
            <button onClick={()=>{history.push('/dashboard')}}>Leave Comment</button>
          </div>
        </div>

        <div className='home__header-end'>
          <p>This is a personal platform to show my upcoming projects ... </p>
        </div>

        <div className='home__card'>
          <h2>This Website</h2>
          <p>Is made with React and the backend with ruby on rails</p>
        </div>

        <div className='home__footer'>
          <div className='home__footer-content'>
            <div className='home__footer-left'>
              <img src='https://logos.textgiraffe.com/logos/logo-name/Tarek-designstyle-boots-m.png' alt='footer_logo'></img>

              <div className='home__footer-addresses'>
                <p>Tarek Elmasri <br/> Riyadh <br/> Saudi Arabia <br/> +966547114896 <br/> Dr.tareqelmasry@hotmail.com <br/></p>
              </div>
            </div>
            <div className='home__footer-social'>
              <FacebookIcon className='icons' />
              <TwitterIcon className='icons' />
              <InstagramIcon className='icons'  />
            </div>
          </div>
          <div className='home__footer-copyrights'>
            <span><small>&copy;</small> All copyrights recieved 2020</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
