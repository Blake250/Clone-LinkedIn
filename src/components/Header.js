

import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import "./stylings/header.css"
import { signOut } from 'firebase/auth';

import Avatar from '@mui/material/Avatar';
import { Auth } from "firebase/auth";

import { useDispatch,useSelector } from "react-redux";
import { auth } from "../firebase";
import { setLogOut } from "../reducers/userReducer";
import Leftside from "./Leftside";
import SearchIcon from '@mui/icons-material/Search';
import ErrorPage from "./ErrorPage";


const Header = ({selected}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userPhoto = useSelector(state=> state.photoURL)

 const [searchInput, setSearchInput] = useState("")

 const handleSubmit = ((e)=>{
     e.preventDefault()

     console.log(` The user input is ${setSearchInput}`)
     setSearchInput(" ")
 })



 const signOutBtn = (()=>{
   signOut(auth)
   .then(()=>{
    navigate("/")

    dispatch(setLogOut(""))
   })
 })

    return ( 
        <>
      
        <Container >
        
        <Content>

        
        <span >
        
        <Link to = { '/' } >
        
        <Logo src = 'images/home-logo.svg' />
        
        </Link> 
        </span> 
        <Search>
        
        <div  onClick={handleSubmit} >
        
        <input type = "text"
        placeholder = 'Search' 
         value={searchInput}
         onChange={(e)=> setSearchInput(e.target.value)}
         />
        </div> 


        <Link to={`/*/${setSearchInput}`}>  
        <SearchBtn src = '/images/search-icon.svg' />

        </Link>

        
        </Search> 
        <Nav >
          
   
        <NavListWrap className='active' >
        
     
        <NabList  >
        <a>
        
        <img src = "./images/nav-home.svg"
        alt = "" />
        
        <span  > Home </span> 
    
        </a> 
        </NabList> 
        <NabList  >
        
        <a>
        
        <img src = "./images/nav-network.svg"
        alt = "" />
        
        <span > Network </span> 
        </a> 
        </NabList> 
        <NabList >
        
        <a>
        
        <img src = "./images/nav-jobs.svg"
        alt = "" />
        
        <span > Jobs </span> 
        </a> 
        </NabList> 
        <NabList>
        
        <a>
        
        <img src = "./images/nav-messaging.svg"
        alt = "" />
        
        <span  > Message </span> 
        </a> 
        </NabList> 
        <NabList >
        
        <a>
        
        <img src = "./images/nav-notifications.svg"
        alt = "" />
        
        <span  > Notifications </span>

        
        </a> 
        </NabList> 
        <User >
        
        <a > 
   
         
        <MyAvatar> 
        { userPhoto ? (
                  <Avatar src={userPhoto} /> // Display the Avatar with the userPhoto if available
                ) : (
                  <Avatar/> // Display a default Avatar if userPhoto is not available
                )}
      </MyAvatar>  
    
        <span  > 
          Me 
          </span> 
          <img

src = "./images/down-icon.svg"
alt = "" />
  
        
        </a> 

        <SignOut onClick={(()=> signOutBtn())} > < a> Sign Out </a></SignOut>
      
  
        
        </User> 
        <Work>
        
        <a>
        
        <img src = "./images/nav-work.svg"
        alt = "" />
        
        <span > Work     </span> 
        <img src = "./images/down-icon.svg"
        alt = ""   style={{paddingLeft:"5px"}} />
     
        </a> 
        </Work>


     
        </NavListWrap> 
        </Nav>

        
       </Content> 
        </Container>


        
        </>
    )
}




export default Header


const Container = styled.div `
background-color :white;
box-shadow:rgba(129, 145, 158, 0.6);
//box-shadow:0 0 50px rgba(0, 0, 0,  0.2);
margin:0;

border-bottom: 4px solid rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 24px;
position: fixed;
top:0;
width: 100vw;
z-index:100;
//position: relative;



`

const Content = styled.div `

display: flex;
align-items: center;

min-height: 100%;






`





const Logo = styled.img `
margin-right:8px;
font-size: 0px;
`


const SearchBtn = styled.img `

width: 20px;
position: absolute;
z-index: 1;
top: 10px;
left:2px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
img{
  font-weight:200 !important;

  &:hover{
    background-color:lightslategray;
    border-radius:50%;
  }
 // opacity:0;
}
`


const Search = styled.div `
opacity: 1;
flex-grow:1;
position: relative;
//border: none !important;
& > div{
  max-width: 280px;
  list-style-type:none !important;

 
  input{

  outline:none;
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.9);
    width: 218px;
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-weight: 400;
    font-size: 14px;
    height: 34px;
    border-color: #dce6f1;
    vertical-align: text-top;

  }

}
`




const NabList = styled.li `



display: flex;
align-items: center;
font-size: 14px;
justify-content:center;
position: relative;
z-index:5;


a{
  align-items:center;
  background-color: transparent;
  display:flex;
   flex-direction: column;
  //justify-content:center;
  
   font-weight: 400;
   //font-weight: 12px;
   line-height: 1.5;
   min-width: 20px;
   max-height: 42px;
   text-decoration: none;
   margin-top:4px;
   padding:0 5px;
   span{
    display:flex;
    align-items: center;
    color : rgba(0, 0, 0, 0.6);
   padding-left: 8px;
 


  
   };

} 




@media (max-width: 768px) {
  a{
    padding:0 !important;
  }
  padding:0 2px;
 // min-width: 10px;
  span{
    margin-right:5px;
    text-align:center;
    font-size:13px;
  };
  img{
    width:15px;

    &:last-child{
      width:12px;
    }
  }

}
&:hover,


&:active{
  a{
span{
 // color:rgba(78, 74, 74, 0.9);
 color:blue;
}


}


}
  




`

const SignOut = styled.div `
position: absolute;
left:-12px;
top:60px;

height: 30px;
display:flex;
align-items:center;
justify-content:center;

//display:none;
text-align: center;
background-color:  #d3d3db ;
opacity:0;
width:80px;

border-radius: 0 0 5px 5px;
transition-duration: 167ms;


border-radius: 5px ;
a{
  font-size:16px
}

@media (max-width: 768px) {
  position: absolute;
left:-18px;
top:37px;
width:60px;
margin-left:10px;
background-color:transparent!important;
font-weight:800 !important;

color:lightslategray;


a{
  font-size:10px !important;
 
}

}


`



const User = styled(NabList)`
//z-index:0 !important;
position: relative;
a{
  font-size:12px;
  text-align:center;


}

 a > img{
  width: 22px;
  border-radius: 50%;
  align-items: center;
  position: relative;
   &:last-child{
    position:absolute;
   top:2.6rem;
  left:10px;


   }
 }
 span{
  display:flex;
  align-items:center;
 }



 &:hover{
  ${SignOut}{
    align-items:center;
    display:flex;
    justify-content:center;
    opacity:1;
    //display:block;
   // position: relative;

  
  }
}



`


const Work = styled(User)`

border-left: 2px solid rgba(0, 0, 0, 0.09);
margin-left:20px;

a{
 
  img{
    //margin-top:3px;
   padding-bottom:2px;
  }
}




`



const NavListWrap = styled.ul `
display: flex;
align-items:center;

flex-wrap: nowrap;
list-style-type: none;
position:relative;
z-index:5;



.active{

    span:after{
      content: '';
    transform: scaleX(1);
    border-bottom: 2px solid var(--white, #fff);
    bottom: -4px;
    left:17px;
    position:absolute;
    transition: transform 0.2s ease-in-out;
    width: 80px;
    border-color: rgba(0, 0, 0, 0.9);
   // opacity:0;
    }


  
}






`






const Nav = styled.nav `

  
width:50%;
display: block;
background-color:	 #ffffff;
box-shadow:0 0 50px rgba(0, 0, 0,  0.2);









@media (max-width: 768px) {
  position: fixed;

  
  bottom: 1px;
  width: 100%;
  margin-left:-25px;

}
`





const MyAvatar = styled(Avatar)`
   position:absolute;


left:2.5px;
width:25px !important;
height:25px !important;
@media (max-width:768px) {
  position: absolute;;


left:-2px;
width:25px !important;
height:25px !important;
//bottom:4px;
svg{
  margin-bottom:3px;
 
}
  
}

`

















