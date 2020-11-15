import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ls from 'local-storage'
import './App.css';
import BackDrop from './components/navbar/BackDrop';
import Nav from './components/navbar/Nav';
import SideBar from './components/navbar/SideBar';
import routes from './routes/routes';
import { useProvider } from './data/StateProvider';
import Loading from './components/Loading';
import AuthRoute from './routes/AuthRoute';
import SessionRoute from './routes/SessionRoute';
import Axios from 'axios';
import PageNotFound from './routes/PageNotFound';

function App() {

  const [{isAuthenticated} , dispatch] = useProvider();

  const [TogleNav, setTogleNav] = useState(false)


  useEffect(() => {
    const stored_user= ls.get('user')
    if (stored_user?.token){
      Axios.get('/api/v1/auth_by_token',{params:{token: stored_user.token}})
        .then(res => {
          ls.set('user' , res.data.user)
          dispatch({type:'auth_user' , data: res.data.user})
        })
        .catch(() =>{
          localStorage.clear('user')
          dispatch({type:'unAuth_user'})
        })
    }else{
      dispatch({type:'unAuth_user'})
    }
  }, [])

  function toggleSideBar(){
    setTogleNav((prevValue)=> (!prevValue))
  }

  if (isAuthenticated===null){
    return <Loading />
  } 
  return (
    <div className='app'>
      <Router>
        <Nav click={toggleSideBar} />
        <SideBar trans={TogleNav} click={toggleSideBar} />
        {TogleNav && <BackDrop click={toggleSideBar} />}
        <Switch>
          {routes.map((route) => {
            if (route.protected==='auth'){
              return <AuthRoute path={route.path} component={route.component} key={route.key} exact={route.exact} />
            }else if(route.protected==='session'){
              return <SessionRoute path={route.path} component={route.component} key={route.key} exact={route.exact} />
            }else{
              return <Route path={route.path} component={route.component} key={route.key} exact={route.exact}  />
            }
          })}

          <Route component={()=><PageNotFound/> }/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
