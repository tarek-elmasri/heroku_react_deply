import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import Loading from '../components/Loading';
import { useProvider } from '../data/StateProvider';

function AuthRoute(props) {
  
  const [{isAuthenticated}] = useProvider();

  if (isAuthenticated){
    return <Route {...props} />
  }else if(isAuthenticated===null){
    return <Loading />
  }else{
    return <Redirect to='/login' />
  }
}

export default AuthRoute;
