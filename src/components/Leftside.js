
import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";



const Leftside = (props) => {
    return ( 
        <div>

        <Container>

        
        <ArtCard>
        
        <UserInfo>

        
        <CardBackground />



        
        <a>
        
        <Photo/>
        
        <Link> Welcome, {props.user ? props.user.displayName : "there"} </Link>    
        </a>    

        <a> < AddPhotoText> Add a Photo 
        </AddPhotoText> </a >




        
        </UserInfo>    
        <WidGet>

        
        <div>

        
        <a>
        
        <span> Connections </span>       
        <span> < p> Grow your network </p></span >

        
       </a>    
        </div>   
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





        
        </Container>  

        </div>

    )
}

const mapStateToProps = (state)=>{
   return { user : state.userState.user
   }
}

export default connect(mapStateToProps)(Leftside)

const Container = styled.div `
grid-area: leftside;
 
@media (max-width:768px){
 
 
 width: 100%;
}
`
const ArtCard = styled.div `
text-align: center;
overflow: hidden;
margin-bottom: 2px;
background-color:  #eef3f8;
border-radius: 5px;
`

const UserInfo = styled.div `
border-bottom : 1px solid rgba(0 0 0 0.15);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;

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
font-size: 18px;
font-weight: 600;
color: rgba(0 0 0 0.9);
line-height: 2.3;


`

const AddPhotoText = styled.div `
line-height: 0;
color: #4d79ff;
margin-top: 2px;
font-size: 14px;
font-weight: 400;
`


const WidGet = styled.div `
border-top : 1px solid rgba(0, 0, 0, 0.15);
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
margin-top: 2px;
margin-bottom: 2px;
line-height: 200%;
     
     img {
      vertical-align:top;
      display: flex;
      position: relative;
      left:217px;
      display:inline-flex;
       
      

    }
    

 & >  a{
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    
    
}
    

& :hover{
    background-color: rgba(0, 0, 0, 0.08)
}


div{
    position: relative;
    top: 20px;
    display: flex;
   flex-direction: column;
    text-align: left;
     &:first-child{
     color:#4d79ff;
     font-size: 14px;
     padding-left:10px 
    }
   
   svg{
       color:#d2a679;
       
   }

      p{
        line-height:0;

    }

    
}
`

const Item = styled.a `

text-decoration: none;
text-align: left;
font-size: 14px;
display: block;
padding: 10px ;


`
const CommunityCard = styled(ArtCard)`




display: flex;
text-align: left;
flex-direction: column;
padding-left: 10px ;
a{
    padding: 4px, 12px, 4px, 12px;
    color: black;
    font-size: 14px;
    
        &:last-child{
            color: #4d79ff;
            text-decoration: none;
             border-top: 1px solid #d6cec2;
             &:hover{
                 background-color: rgba(0, 0, 0, 0.08);
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