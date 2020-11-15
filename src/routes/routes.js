import React from 'react'
import About from '../components/about/About';
import AddComment from '../components/dashboard/AddComment';
import Dashboard from '../components/dashboard/Dashboard';
import Home from '../components/Home/Home';
import Login from '../components/sessions/Login';
import Register from '../components/sessions/Register';

const routes=[
  {
    path:'/login',
    protected:'session',
    key: 'login',
    exact: false,
    component : ()=> <Login />
  },
  {
    path: '/about',
    protected: 'free',
    exact: false,
    key: 'about',
    component: ()=> <About />
  },
  {
    path: '/register',
    protected: "session",
    exact: false,
    key: 'register',
    component: ()=><Register />
  },
  {
    path: '/dashboard',
    exact: true,
    protected: 'free',
    key: 'dashboard',
    component: ()=> <Dashboard />
  },
  {
    path:'/add_comment',
    exact: true,
    protected: 'auth',
    key:'new_comment',
    component: ()=> <AddComment />
  },
  {
    path:'/',
    protected:'free',
    exact: true,
    key: 'home',
    component:()=> <Home />
  }
]

export default routes;