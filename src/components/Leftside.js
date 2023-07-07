
import React from 'react';
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';

import "./stylings/header.css"
import { useSelector } from 'react-redux';


import { selectUserEmail, selectUserPhoto } from '../reducers/userReducer';




const Leftside = (props) => {

 
  const userPhoto = useSelector(state=> state.photoURL)
  const userEmail = useSelector((state)=> state.user?.email)
  const userName = useSelector((state)=> state.displayName)


   

      

    return ( 
        <Container>

        <ArtCard>
        
        <UserInfo>

        
        <CardBackground>
           
        </CardBackground>
        
     
        
        <a>
       
        
        <Photo>
      
        </Photo>
        
        <Link> Welcome <br /> {userEmail ? userEmail : "there"}  </Link>    
        </a>    

       < AddPhotoText>  
       <a>  Add A photo  </a >
       </AddPhotoText>




        
        </UserInfo>    
        <WidGet>

       
        <a>  
        <div >
       
        < span > Connections </span>
        <span > your network</span> 
        <span>blake@gmail.com</span>
     
              
     
       
      
        </div>
        </a>
 
     

 
    
     <img src = "./images/widget-icon.svg"
        alt = "" />
      

        
        </WidGet>    
        <Item> <img src = "./images/item-icon.svg"
        alt = "" /> My Items </Item>




        
        </ArtCard>
           
        <CommunityCard>



        
        <a> < span > Groups </span></a >



        
        <a> < span > Events 
        <img src = "./images/plus-icon.svg"
        alt = "" />
        
        </span>  
        </a>



        
        <a> < span > Follow Hashtags </span></a >



        
        <a> < span > Discover more </span></a >


     

        
        </CommunityCard>
 

        <BarItems>
        <h6><span>Recent</span></h6>

     
  <a>

  <span> # React developer</span>  
    <span> # node developer</span>
    <span> # web developer</span>
                
     <span># node developer</span>
    <span># web design</span>
  </a>
     
             

       

       </BarItems>

      
  

        
        </Container>  
   


     
    )
}


export default Leftside

const Container = styled.div `
grid-area: leftside;





background-color : rgba(0, 0, 0, 0.08) !important;

width:auto;
height:24%;
border-radius:5px;

`

const Content = styled.div`
width:100%;
max-height:100%;


`




const MyAvatar = styled(Avatar)`
   position: relative;
   left:3px;
    width: 60px !important;
    height:60px !important;
  top:4px;
  position: relative;
  z-index:20;




`






const WidGet = styled.div `
border-top: 1px solid rgba(0, 0, 0, 0.15);
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
margin-top: 2px;
margin-bottom: 2px;

//background-color:#dce2e2;
z-index:20;
position: relative;
//border-radius:5px;




     
     img {
      vertical-align:top;
      display: flex;
      position: absolute;
      right:9px;
      bottom:45px;
      display:inline-flex;
      width:15px;
    
   
       
      

    }
    

 &>a{
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
   // border-radius: 2px solid rgba(0, 0, 0, 0.15);

    


 
    
}
    



div{
   
    display: flex;
   flex-direction: column;
    text-align: left;
    font-weight:bold;
    line-height:2;
  
    
     &:first-child{
     color:#4d79ff;
     font-size: 12px;
     //padding-left:10px;
     font-weight:600;
     text-transform:uppercase;
  
  

   
    
}
span{
   // width:100%;
    
    &:nth-child(2){
       width:88%;
    &:hover{
        background-color:whitesmoke;
        
       
      
         border-radius:15px;

    }

  
}


}
span{
   
       // padding:3px 1px;
    &:last-child{
        width:100%;
        &:hover{
            background-color:whitesmoke;
        
   
         border-radius:15px;
        }
    }


   }

  
   
   svg{
       color:#d2a679;
       
   }

span{
     padding:5px;
    &:first-child{
      width:90%;
       
  
        &:hover{
            background-color:whitesmoke;
            
            border-radius:15px;
        }

        
            
        
    }
}

    
}
`








const ArtCard = styled.div `

text-align: center;
overflow: hidden;
margin-bottom: 2px;
//background-color:  #eef3f8;
border-radius: 5px;
/*&:hover{
    ${WidGet}{
      a{
         div{
            span{
              :nth-child(1){
                background-color:whitesmoke;

             
              
              }
           
            }
         }
      }
    }
}*/
`

const UserInfo = styled.div `
border-bottom : 1px solid rgba(0 0 0 0.15);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
line-height:0;

//margin-bottom:20px;


@media (max-width:768px) {
    border-bottom : 1px solid rgba(0 0 0 0.15);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
    
}
`

const CardBackground = styled.div `
background-image: url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
margin: -12px 0 -12px;
height: 60px;
`

const Photo = styled.div `
box-shadow: none;
background-image: url("./images/photo.svg");
background-clip: content-box;
background-position: center;
background-size: 60%;
background-color: white;
width: 72px;
height: 72px;
background-repeat: no-repeat;
border: 3px  double white;
margin: -38px auto 12px;
border-radius: 50%;






`

const Link = styled.div `
font-size: 16px;
font-weight: 600;
color: rgba(0 0 0 0.9);
line-height: 2;


`

const AddPhotoText = styled.div `
line-height: 0;
color: #4d79ff;
margin-top: 2px;
font-size: 14px;
padding-top:5px;
a{
    font-size:13px;
    font-weight: 600;
}
`



const Item = styled.a `

text-decoration: none;
text-align: left;
font-size: 14px;
display: block;
padding: 10px ;
z-index:20;
position: relative;
margin-left:2px;

&>img{
    &:hover{
      
    background-color:#6f7276 !important;
      

}

}
&:hover{
  
    background-color:whitesmoke !important;
         width:99%;
        
        
       
            border-radius:5px;

}
@media (max-width:768px) {
    &:hover{

    background-color:#cbcdd0;
     
            border-radius:5px
            
    }
    
}




`
const CommunityCard = styled(ArtCard)`
position: relative;
z-index:20;
background-color : rgba(159, 148, 148, 0.08);
a{
    padding:7px;
}

@media (max-width:768px) {
 a{

    &:last-child{
            color: #4d79ff;
            text-decoration: none;
             border-top: 1px solid #d6cec2;
            margin-left:-5px;
             padding:5px;

             span{
   // width:100%;
  //padding:3px 3px;

    &:last-child{
       padding:5px;

        &:hover{
            background-color:#8d929c;
            width:100% !important;
          
         
         border-radius:15px;
        }
    }


   }

     
        }

 }
       
    
}


display: flex;
text-align: left;
flex-direction: column;
padding-left: 10px ;
a{
    padding: 4px, 12px, 4px, 12px;
    color: black;
    font-size: 14px;
    font-weight:bold;
    margin-bottom:3px;
    
        &:last-child{
            color: #4d79ff;
            text-decoration: none;
             border-top: 1px solid #d6cec2;
            margin-left:-5px;
             padding:5px;

             span{
   
   padding:3px 3px;
    &:last-child{
      
        &:hover{
            background-color:#8d929c;
            width:100%;
         
         
         
         border-radius:15px;
        }
    }


   }
 }
     

     
        }
    




span{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right : 12px;
   
    &:hover{
    color:#0055ff;
}
   

   

}

`


const BarItems = styled.div`


 border-radius:10px;
 //background-color: #eef3f8;
 border: 2px solid lightgray;
//padding-top:5px;
padding-left:6px;
//margin-top:5px;
font-weight:bold;
cursor: pointer;
position: relative;
z-index:15;
padding-bottom:10px;

padding-top:8px;

h6{
    text-align:center;
 font-weight:bold;
padding:0;
 font-size:25px;
 font-style:italic;



    
   
    &:hover{
    background-color:whitesmoke;
    border-radius:10px;
   
    width:98%;

   

  
  }

}

a{

  
span{

 

// margin-left:-10px;

 display:flex;
 align-items:flex start;
 justify-content:flex-start;
 padding:5px;
 font-size:14px;
 height:4vh;
 cursor:pointer;
 line-height:1px;
 position: relative;
 font-style:italic;
 border-radius:10px;
        padding-top:15px;

        &:hover{
    background-color:whitesmoke !important;
    width:95%;
  

    }
    

}
}



`

const BarHash = styled.div`
    
`