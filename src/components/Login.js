

import styled from "styled-components";

import { Navigate, useNavigate } from "react-router-dom";
import  signInApI from "../action";
import { useDispatch,useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { setCurrentUser, setError } from "../reducers/userReducer";

import { useState } from "react";






const Login = () => {
  const dispatch = useDispatch()
  //const userDetails = useSelector((state)=> state.user)
  const navigate = useNavigate();


  



 const signInApI= (e)=> {
  //e.preventDefault()
  //  


   
 
 
         signInWithPopup(auth,provider).then((payload) => {
            console.log(payload.user)
         
        navigate("/home")
           let user = payload.user
            


            dispatch(setCurrentUser({
              Name: user.displayName,
              email:user.email,
              photo:user.photoURL
             }))
            

           
 
 
            
         
            
           
         }).catch((error) =>dispatch(setError(error)))
 
           
 }

 

  
  return (
    <Container>
   
      <Nav>
        <a href="/">
          <img  src="/images/login-logo.svg" alt=""/>
        </a>

       <div> 
          <Join>Join Now </Join>
          <SignInBtn onClick={signInApI}  > 
           
          sign In
           
       
       </SignInBtn>

          </div>



      </Nav>
      <Section>
        <Home>
        <h1>Welcome to your professional community</h1>
          <img src="/images/home-page.jpg" alt=""/>
        </Home>
      </Section>
   
      <Form  >

      <Google onClick={ ()=> signInApI() }>
          <img src="/images/google.svg" alt="" />
          Sign in with Google
        </Google>
      </Form>
     
    </Container>

  )

  
  
}


  


//export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login


const Nav = styled.nav`


//margin-bottom:30px;
padding : 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap : nowrap;
max-width:1130px;


margin:auto;
& > a > img{
  width: 135px;
  height : 45px;

  
  @media (max-width: 760px){
    padding : 0 5px;
    
    
  }
}
`
const Container = styled.div`
padding: 0;
//overflow:hidden;
background-color : rgba(0, 0, 0, 0.08);
//margin:0;
//max-width:100%;
width:100%;
//height:auto;
//margin-top:70px;


`

const Join = styled.a`
  font-size:16px;
padding : 11px 12px;
text-decoration: none;
color : rgba(0, 0, 0, 0.6);
margin-right : 24px;
//font-style:italic;
font-weight:bold;
//color:lightgray;
position: relative;
z-index:5;

&:hover{

  color:blue;
}

span{
  font-weight: 600;
}
&:hover > span{
   background-color : rgba(0, 0, 0, 0.08);
  color : hsla(0, 0%, 0%, 0.9);
  text-decoration : none;
  border-radius: 4px 4px;
  text-decoration:none !important;
 
}
`
const SignInBtn = styled.span`
  position: relative;
top: 0;
bottom : 3px;
right: -2px;
box-shadow : inset 0 0 4px #1a66b2;
color: #0a66c2 ;
border-radius : 24px;
transition-duration : 167ms;
font-size : 16px;
font-weight : 600;
line-height: 40px;
text-align: center;
padding : 10px 24px;
text-decoration: none !important;
background-color: rgba(0, 0, 0, 0,);
z-index:4;



  &:hover{
   
  background-color : rgba(112, 181, 249, 0.15);
  color : #0a66c2;

   
     text-decoration : none;
//  background-color: #1d2325 !important;

   
     }
@media (max-width:768px) {

  position: relative;
top: 0;
bottom : 3px;
right: 30px;

}




`
const Section = styled.section`
display: flex;
align-content: center;
min-height: 650px;

padding-top: 40px;
//padding: 60px 0;
max-width: 1228px;
width: 100%;
align-items: center;
margin: auto;
flex-wrap: wrap;
position: relative;
  bottom: 360px;
  left:0;

 

img{
  z-index: -1;
   width: 600px;
 height:600px;
 position: absolute ;
 
// top: 430px;
 right: 130px;
 left: 470px;
 @media (max-width: 768px) {
  
  width: 100px ;
  height: 100px;
  position: absolute;
  left: 50px;
 //  top: 350px;
  
}

}
`
const Home = styled.div`
  
  //padding-bottom: 0;
  width:100%;
  color: #0a66c0;
  height:100% ;
 

  




  

  img{
    width:60%;
   
 height:115vh;
 //padding-bottom:10px;

border-radius:50%;


 z-index:1;


 @media (max-width: 768px){
  width:60% !important;
    margin-top:20px;
    //height:20vh;
 height:115vh !important;

 

border-radius:50% !important;
//padding:50px 50px;

 z-index:1;
 //box-sizing:content-box;
  
 }
  
  }


  


  
  h1{
  padding-top: 100px;
  text-align:center;
     
    font-size:56px;
    line-height: 1;
  
    font-weight: 400;
    bottom: 60px; 
    //width:55%;
   // display:flex;
    white-space: nowrap;

      
  } 
  @media (max-width: 768px) {
  //width:100%;
// height:auto;
 position:relative;


img{
  margin-top:30px !important;
    width: 90% !important;
 height: 90vh !important;
  border-radius: 50%;
  position:absolute;
  top:80%;
 left:24px !important;
 //margin-left:20px;
}


 


 
  

//margin-bottom: 0;
     
     h1{  margin-bottom:60px;
       text-align:center;
       font-size:30px;
       line-height:1;
       //width:100%;
       padding-top:40%;
       white-space: pre-wrap;
     
       
     }
  
    } 
`
const Form = styled.div`
margin-top: 100px;
width: 500px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
bottom: 400px;
height: 50px;
@media (max-width: 760px) {
  margin-top: 20px
  
}
`

const Google = styled.button`
position: absolute;
//bottom: 160px;
//right: -87px;
border-radius: 28px;
width:400px;
background-color:#e9edf5;
height: 47px;
text-align: center;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), 
inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
z-index: 0;
transition-duration: 167ms;
font-size: 20px;
color: rgba(0, 0, 0, 0.6);
&:hover{
  background-color: rgba(207, 207, 207, 0.25)
}

@media (max-width: 768px) {
  
 position: relative;
  top: 380px;
  //left:9px;
text-align:center;
 
  
  
}
`














