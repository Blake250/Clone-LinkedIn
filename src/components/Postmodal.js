
import    React, {forwardRef}  from 'react';
import styled from "styled-components";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';


const PostModal = forwardRef(({Name, description, message, photoURL}, ref) => {
  return (
     
        <Container  ref={ref} >
            <Content>
         
            
               <Profile>  
               <AccountCircleIcon/>
             
          
          
                <div>
                
                <h2>{Name} </h2>
                <p>{message}</p>
                <span> {description} </span>
              </div>
        

                  </Profile>


           
            <SocialActions>
          <button>
             
              <ThumbUpOffAltIcon/>
              <span>Like</span>
          </button>
          <button>
             
              <MessageIcon/>
              <span>Comments</span>
          </button>
          <button>
            
              <ShareIcon/>
              <span>Share</span>
          </button>
            <button>
            
              <SendIcon/>
              <span>Send</span>
          </button>
         </SocialActions>

            </Content>
        </Container>
       
  )
  
}

)

export default PostModal


const Container = styled.div`



z-index: 24;
position: relative;

display:flex;
align-items:center;
justify-content:center;

border-radius:5px;

border:2px solid lightgray;


background-color : rgba(0, 0, 0, 0.08) !important;


`
const Content = styled.div`

//max-width:100%;
width:100%;
margin-bottom:20px;
padding-left:10px;







`

const Profile = styled.div`
display:flex;
align-items:flex-start;
position: relative;
//padding-left:40px;
padding-top:20px;
svg{
font-size:40px;
position: absolute;
left:0px !important;
&:hover{
  background-color:gray;
  border-radius:50%;
}
}
div{
padding-left:40px;
 
:first-child{
  display:flex;
  align-items:flex-start;
  flex-direction:column;
  justify-content:flex-start;

}



&>h2{
  font-style:italic;
  color:gray;

}
p{
  font-style:italic;
  font-size:14px;
  line-height:0;

}
&>span{
  font-style:italic;
  font-weight:600;
}

}




  



`

const SocialActions = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
   // min-height:40px;
    //margin:0;
   // padding: 4px 8px;
    outline:none;
   // box-sizing:content-box;
   padding-top:70px;
 
 
       align-items:center;
       justify-content:center;
       position: relative;
       z-index:5;

       
     
      
      
        
    button{
        display:inline-flex;
        align-items:center;
      //  padding:8px;
        color: #0a66c2;
       background-color:transparent;
       padding: 5px 30px;
       margin-top:12px;
       box-sizing:content-box;
       display:flex;
       justify-content:center;
       width:12%;
       

       & svg>span{
       // padding-top:50px;

       }
       
    

       span{
        font-size:14px;
        font-style:italic;
       }
       
      
            border:none;
     
        @media (min-width:768px){
            span{
                margin-left:8px;
            }
        }

        &:hover{
            background-color:#fff;
            opacity:3;
            border-radius:12px;
       
           
        }
     
    
    }
   
`
