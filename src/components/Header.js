import * as ReactDOMClient from 'react-dom/client';
import styled from "styled-components";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import SignOutAPI from "../action/signout"

const Header = (props) => {
    return ( 
        <>
        
        <Container>
        
        <Content>

        
        <span >
        
        <Link to = { '/' } >
        
        <Logo src = 'images/home-logo.svg' />
        
        </Link> 
        </span> 
        <Search>
        
        <div>
        
        <input type = "text"
        placeholder = 'Search' />
        
        </div> 
        <SearchIcon src = '/images/search-icon.svg' />

        
        </Search> 
        <Nav>
        
        <NavListWrap className = 'active'>
        
        <NabList>
        
        <a>
        
        <img src = "./images/nav-home.svg"
        alt = "" />
        
        <span > Home </span> 
        </a> 
        </NabList> 
        <NabList>
        
        <a>
        
        <img src = "./images/nav-work.svg"
        alt = "" />
        
        <span> Network </span> 
        </a> 
        </NabList> 
        <NabList>
        
        <a>
        
        <img src = "./images/nav-jobs.svg"
        alt = "" />
        
        <span> Jobs </span> 
        </a> 
        </NabList> 
        <NabList>
        
        <a>
        
        <img src = "./images/nav-messaging.svg"
        alt = "" />
        
        <span> Messaging </span> 
        </a> 
        </NabList> 
        <NabList>
        
        <a>
        
        <img src = "./images/nav-notifications.svg"
        alt = "" />
        
        <span> Notifications </span>

        
        </a> 
        </NabList> 
        <User>
        
        <a> 
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} alt="" />
          ):
          
          (< img src = "./images/user.svg"
  alt = "" />) }
        <span> 
          Me 
         
        <img

        src = "./images/down-icon.svg"
        alt = "" />
        
         </span> 
        </a> 
        <SignOut onClick={()=> props.SignOut()}> < a> Sign Out </a></SignOut>
        
        </User> 
        <Work>
        
        <a>
        
        <img src = "./images/nav-work.svg"
        alt = "" />
        
        <span> Work 
        <img src = "./images/down-icon.svg"
        alt = "" />
         </span> 
        </a> 
        </Work>


        
        </NavListWrap> 
        </Nav>

        
       </Content> 
        </Container>


        
        </>
    )
}
const mapSateToProps = (state)=>{
 return {
   user: state.userState.user
 }
}


const mapDispatchToProps = (dispatch)=>({
  signOut : ()=> dispatch(SignOutAPI())

})




export default connect(mapSateToProps, mapDispatchToProps)(Header)


const Container = styled.div `
background-color : white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 24px;
position: fixed;
top:0;
width: 100vw;
z-index:100;
`

const Content = styled.div `

display: flex;
align-items: center;
margin: 0 auto;
min-height: 100%;
max-height: 1128px;
`

const Logo = styled.img `
margin-right:8px;
font-size: 0px;
`


const SearchIcon = styled.img `

width: 20px;
position: absolute;
z-index: 1;
top: 10px;
left:2px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
`


const Search = styled.div `
opacity: 1;
flex-grow:1;
position: relative;
& > div{
  max-width: 280px;
  input{
    border: none;
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

const Nav = styled.nav `

  
margin-right: 60px;
display: block;
background-color:	 #ffffff;
@media (max-width: 768px) {
  position: fixed;
  
  bottom: 1px;
  width: 100%;
  right:-29px;

}
`

const NavListWrap = styled.ul `
display: flex;
flex-wrap: nowrap;
list-style-type: none;

.active{
    span:after{
      content: '';
    transform: scaleX(1);
    border-bottom: 6px solid var(--white, #fff);
    bottom: 0;
    left:0;
    position:absolute;
    transition: transform 0.2s ease-in-out;
    width: 100px;
    border-color: rgba(0, 0, 0, 0.9);
    }

  }




`

const NabList = styled.li `
display: flex;
align-items: center;
font-size: 14px;

a{
  align-items:center;
  background-color: transparent;
  display:flex;
   flex-direction: column;
  
   font-weight: 400;
   font-weight: 12px;
   line-height: 1.5;
   min-width: 20px;
   max-height: 42px;
   text-decoration: none;
   span{
    display:flex;
    align-items: center;
    color : rgba(0, 0, 0, 0.6);
   padding-left: 10px;
   };

@media (max-width:768px) {
  
  min-width: 70px
}
&:hover, &:active{

    span{
      color: rgba(0, 0, 0, 0.9);
    }
  
} 

  

}
`
const SignOut = styled.div `
position: absolute;
top:58px;
right: 110px;
height: 20px;
display:none;
text-align: center;
background-color:  #e6e6ff;
border-radius: 0 0 5px 5px;
transition-duration: 167ms;

`


const User = styled(NabList)`

 a > img{
  width: 22px;
  border-radius: 50%;
  align-items: center;
   &:last-child{

 position: relative; 
 bottom:8px;
 left: 3px
   }
 }



  &:hover{
   ${SignOut}{
     align-items:  center;
     display:flex;
     justify-content: center;
   }
 }



`



const Work = styled(User)`

border-left: 2px solid rgba(0, 0, 0, 0.09);
position: relative;
left: 13px;


`



















