import React from 'react'
import './navbar.css'
import {Menu} from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { useProvider } from '../../data/StateProvider'


function Nav({click}) {

  const [{isAuthenticated},dispatch] = useProvider();

  const history=useHistory();

  const handleSignOut=()=>{
    dispatch({type:'unAuth_user'})
    localStorage.clear('user')
    history.replace('/')
  }

  return (
    <div className='nav'>
      <div className='nav__container'>
        <div className='nav__right'>
          <Menu fontSize='large' className='nav__button' onClick={click}/>

          <div className='nav__logo'>
            <img src='https://static.thuisbezorgd.nl/images/restaurants/nl/5RR311N/logo_465x320.png' alt='logo'></img>
          </div>
        </div>

        <div className='nav__list'>
          <Link to='/' className='nav__link'>
            <div className='nav__listButton'>Home</div>
          </Link>
          <Link to='/#' className='nav__link'>
            <div className='nav__listButton'>About Us</div>
          </Link>
          <Link to='/dashboard' className='nav__link'>
            <div className='nav__listButton'>Comments</div>
          </Link>
          {!isAuthenticated ?
            <>
              <Link to='/login' className='nav__link'>
                <div className='nav__listButton'>Login</div>
              </Link>
              <Link to='/register' className='nav__link'>
              <div className='nav__listButton'>Register</div>
              </Link>
            </>
          : <div className='nav__listButton' onClick={handleSignOut}>SignOut</div>
        }
        </div>
      </div>
    </div>
  )
}

export default Nav
