import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useProvider } from '../../data/StateProvider'
import './Sidebar.css'

function SideBar({trans, click}) {

  const [{isAuthenticated},dispatch] = useProvider();
  const history=useHistory();

  const handleSignOut=()=>{
    dispatch({type:'unAuth_user'})
    localStorage.clear('user')
    click()
    history.replace('/')
  }

  return (
    <div className={`sidebar ${trans}`} >
      <div className='sidebar__logo'>
        <img src='https://static.thuisbezorgd.nl/images/restaurants/nl/5RR311N/logo_465x320.png' alt='logo'></img>
      </div>

      <div className='sidebar__list'>
        <Link to='/' className='sidebar__link'>
          <div className='sidebar__listButton' onClick={click}>
            <span>Home</span>
          </div>
        </Link>
        <Link to='/#' className='sidebar__link'>
          <div className='sidebar__listButton' onClick={click}>
            <span>About Us</span>
          </div>
        </Link>
        <Link to='/dashboard' className='sidebar__link'>
          <div className='sidebar__listButton' onClick={click}>
            <span>Comments</span>
          </div>
        </Link>
        {!isAuthenticated ? 
          <>
            <Link to='/login'className='sidebar__link'>
              <div className='sidebar__listButton' onClick={click}>
                <span>Login</span>
              </div>
            </Link>
            <Link to='/register' className='sidebar__link'>
              <div className='sidebar__listButton' onClick={click}>
                <span>Register</span>
              </div>
            </Link>
          </>:
            <div className='sidebar__listButton' onClick={handleSignOut}>
              <span>SignOut</span>
            </div>
          }

      </div>
    </div>
  )
}

export default SideBar
