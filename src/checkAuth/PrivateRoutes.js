import React from 'react'
import useAuth from './useAuth'
import { Outlet } from 'react-router-dom'
import Login from '../components/Login'

function PrivateRoutes() {
    const user = useAuth()
  return typeof user === "undefined" ?(

    <div>      
     Loading.....
    </div>) :   user ?(
 

    <Outlet/>
  ) : (
  
  <Login/>)
  

  
  
}

export default PrivateRoutes