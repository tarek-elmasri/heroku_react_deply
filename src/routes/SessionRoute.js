import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import Loading from '../components/Loading';
import { useProvider } from '../data/StateProvider'

function SessionRoute(props) {
  const [{isAuthenticated}] = useProvider();

  if (isAuthenticated){
    return <Redirect to='/' />
  }else if(isAuthenticated===null){
    return <Loading />
  }else{
    return <Route {...props} />
  }
}

export default SessionRoute
