
import React from 'react'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostModal from "./Postmodal";

const Main = (props) => {
    return ( <>
        <Container >
           <div> 
         <ShareBox>
             Share
           

         <div >
        <img src="./images/profile.png" alt=""/> 
         <button>
             <span>
            <p >Start a post</p>
             </span>
             </button>
         </div>
           
        <div>
        <button >
      <img  src="./images/picture.png" alt="" />
        <span>Photo</span>
        </button>

        <button>
            <img src="./images/video.png" alt="" />
            <span>Video</span>
        </button>

        <button>
            <img src="./images/Events.png" alt="" />
            <span>Event </span>
        </button>

        <button>
            <img  src="./images/article.png" alt="" />
            <span>Write article</span>
        </button>
        </div>
         </ShareBox >
         <Article >
          <SharedActor>
              <a>
               <img src="images/profile.png" alt="" />  
              <div>
                 <span>Title</span> 
               <span>Info</span>
               <span>Date</span>
              </div>
              </a>
              <button>
                  <img src="/images/dots.svg" alt="" />
              </button>
             
          </SharedActor>
 <Description>Description</Description>
         </Article>
            <SharedImg>
              <a>
              <img src="/images/shared-img.jpg" alt="" />    
              </a>
          </SharedImg>
          <SocialCounts>
              <li>
               <button>
                <img src="./images/thumb-up.png" alt="" />


                   <img src="./images/clapping.png" alt="" />
                   <span>75</span>
               </button>   
              </li>
              <li>
               <a>2 comments</a>   
              </li>
              

          </SocialCounts>
          <SocialActions>
          <button>
              <img src="./images/like-up.png" alt="" />
              <span>Like</span>
          </button>
          <button>
              <img src="./images/comment.png" alt="" />
              <span>Comments</span>
          </button>
          <button>
              <img src="./images/share.png" alt="" />
              <span>Share</span>
          </button>
            <button>
              <img src="./images/send.png" alt="" />
              <span>Send</span>
          </button>
         </SocialActions>
          </div>
        </Container> 
        <PostModal>
            
        </PostModal>
        </>
    )
}
const Container = styled.div `
grid-area: main;
width:100%;




@media (max-width:768px) {
    width: 100%;
    
    div{
        &:first-child{
            button>span{
          p{
         line-height:1;
         position:relative;
         left:-285px;
         
         padding-top:12px;
         white-space:nowrap;
         
          }
         
            }
        }
        
    }
    .title{
       display:block;
    }
  
      
    
}

`

export default Main

const CommonCard = styled.div `

text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color:#eef3f8;
border-radius:5px;
position: relative;
border: none;

box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0 / 20%)

`

 const ShareBox = styled(CommonCard)`
 display:flex;
  flex-direction:column;
color:#958b7b;
margin: 0 0 8px ;
background:#eef3f8;





div{ 
 background-color: #eef3f8;
  
    button{
        border:none ! important;
        color:rgba(0, 0, 0, 0.9);
        font-size:14px;
        line-height:1.5;
       
        color:#5399db;
        
        min-height:48px;
        background:transparent;
        font-weight:600;
        display:flex;
        align-items:center;
        box-sizing:border-box;
        width:100%
          
    }
    
      
    &:first-child{
        display:flex;
        align-items:center;
        padding: 8px 16px 0px 16px;
         flex-wrap:nowrap;
     
         
         

 img{
            width:48px;
            border-radius:50%;
            margin-right:8px;        
 
       } 

    button >span {
       
              
           border:1px solid rgba(0, 0, 0, 0.15);
          margin: 4px  0;
          flex-grow:1;
          border-radius:35px;
          box-sizing:border-box;
          padding-left:400px;
          display:block;
         
          
          
         p{
        
          line-height:1;
         position:relative;
         right:480px;
         padding-top:10px;
         white-space:nowrap;
       
         
         
          }
   
       
    }
    
    }
    &:nth-child(2){
        display:flex;
        flex-wrap:nowrap;
        justify-content:space-around;
        padding-bottom:4px;

        button{
            img{
                margin: 0 2px 0 -1px;
            }
        }

    }
    
   
        
}

    
`

const Article = styled(CommonCard)`
    padding:0;
    margin: 0 0 8px;
    overflow:visible;
    height:50%; 
  

`
const SharedActor = styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding:3px 16px 0;
  @media (max-width:768px) {
     width:100%;
     line-height:1;
        
    }
    button{
        img{
            position:absolute;
            bottom:27px;
            right:7px;
            
        }
    }




align-items:center;
  a{
            
            margin-right:12px;
            margin-top:12px;
            flex-grow:1;
            display:flex;
            overflow:hidden;
            flex-wrap:wrap;

           &>div{
               display:flex;
               flex-direction:column;
             flex-grow:1;
             flex-basis:0;
             margin-left:8px;
             overflow:hidden;
             line-height:1;

            &:nth-child(n+2){
             font-size:16px;
             color:rgba(0, 0, 0, 0.6);
            }
    
             span{
                 text-align:left;
                
                 &:first-child{
                     font-size:16px;
                     font-weight:700;
                     color:rgba(0, 0, 0, 1);   
                    
                 }
             }              

           } 

            img{
                width:50px;
                height:50px;
                vertical-align:middle;
            } 

            
           
           
        }
    button{
        
         position:absolute;
         right:15px;
        bottom:33px;
        border:none !important;
        outline:none;
    
    
        img{
            
            width:20px; 
             display:block; 
             
            
            
        }
        
    }
`

const Description = styled.div`
padding:0 16px;
overflow: hidden;
color:rgba(0, 0, 0, 0.9);
font-size:14px;
text-align:left;

`


const SharedImg = styled.div`
    
        
        width:100%;
        margin:-7px 0;
        display:block;
        background-color:#f9fafb;
        position:relative;
        img{
        object-fit:contain;
         width:100%;
        height: 100%;
        }
    
`
const SocialCounts = styled.ul`
margin-top:5% 16px 0;
line-height:1.3;
display: flex;
align-items : flex-start;
overflow: auto;

padding: 16px 16px  0 16px;
list-style-type: none;


li{
    margin-right:5px;
    font-size: 14px;
    
       
    button{
       
        img{
            width:15px;
            margin-right:3px;
        }
    }
}
    
`

const SocialActions = styled.div`
    align-items:center;
    display:flex;
    justify-content:flex-start;
    min-height:40px;
    margin:0;
    padding: 4px 8px;
    button{
        display:inline-flex;
        align-items:center;
        padding:8px;
        color: #0a66c2;
        @media (min-width:768px){
            span{
                margin-left:8px;
            }
        }
    
    }
        
`
