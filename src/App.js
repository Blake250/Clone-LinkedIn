    
import React, { useEffect } from 'react';
    

import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";

import { setCurrentUser, setLogOut } from './reducers/userReducer';

import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import ErrorPage from './components/ErrorPage';
import PrivateRoutes from './checkAuth/PrivateRoutes';







function App(props) {

    const dispatch = useDispatch()
const userEmail = useSelector((state)=> state.user?.email)

    useEffect(()=>{
        onAuthStateChanged(auth, ((user)=>{
         if(user){
            dispatch(setCurrentUser({
                displayName:user.name,
                email:user.email,
                photoURL:user.photoURL

            }))
         }else{
            dispatch(setLogOut())
         }

        }))



    }, [])
   


    return ( 
            <div className = "App" >

        <Router>

      <Routes>
        <Route path = '/'
        element = { <Login /> }
        />  
        
       <Route   element={ <PrivateRoutes/>} >
       <Route path ='/home/*'
        element = {  <>  < Header /> < Home /> </>}/>
         
         </Route>
         <Route path='*'   element={<ErrorPage/>}  />


           </Routes>   
           </Router> 
            </div>
        );
    }

  

    export default(App)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*import React from 'react';
    import { useEffect } from 'react';
    import { connect } from 'react-redux';
    import styled from "styled-components";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

    import './App.css';
    import Login from "./components/Login";
    import Home from "./components/Home";
    import Header from "./components/Header";
    import getUserAuth from "./action";




    function App(props) {
        useEffect(() => {
            props.getUserAuth()
        }, [])


        return ( <
            div className = "App" >


            <
            Router >


            <
            Routes >




            <
            Route path = '/'
            element = { < Login / > }
            />  <
            Route path = '/home'
            element = { < > < Header / > < Home / > < />}/ >



                <
                /Routes>   < /
                Router > <
                /div>
            );
        }

        const mapStateToProps = (state) => {
            return {

            }
        }

        const mapDispatchToProps = (dispatch) =>
            ({
                getUserAuth: () => dispatch(getUserAuth())
            })

        export default connect(mapStateToProps, mapDispatchToProps)(App)*/