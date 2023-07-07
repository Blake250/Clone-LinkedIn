
import React, {useEffect, useState} from 'react'
import styled from "styled-components";

import PostModal from "./Postmodal";
import CreateIcon from '@mui/icons-material/Create';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import db from '../firebase';
import { collection, onSnapshot, addDoc,serverTimestamp, orderBy, query } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';






const Main = () => {

    const [posts, setPosts] = useState([])
    const [Inputs, setInputs] = useState(" ")

    const userPhoto = useSelector(state=> state.photoURL)
  const userEmail = useSelector((state)=> state.email)
  const userName = useSelector((state)=> state.displayName)

   


    const sendPost = ((e)=>{
        e.preventDefault();
        const colRef = collection(db, "post")
    
    
         addDoc(colRef, {
            Name:userName || "christian",
         description: userEmail || "Check out my new post please!",
         message:Inputs,
         timeStamp: serverTimestamp(),
         photoURL:userPhoto || " ",

        })
    

        setInputs("")
   
    })
     useEffect(()=>{
        const colRef = collection(db, "post")
        const RefData = query(colRef, orderBy("timeStamp", "desc"))
        onSnapshot(RefData, ((data)=>{
            setPosts(data.docs.map((doc)=>({
                id:doc.id,
                data:doc.data()

            })))
            console.log(posts)
          
     }))




     }, [])
    



    return ( 
        <Container >
           <div> 
         <ShareBox>
             Share
           

         <div >
        <img src="./images/profile.png" alt=""/> 
        <CreateIcon/>
         <form >
          
            <input type="text" value={Inputs} onChange={(e)=> setInputs(e.target.value)} />
            <button  onClick={sendPost }  type='submit' >send</button>
            
             </form>
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
        <div   >  
            <FlipMove>  
            {
                posts.map(({id, data:{Name, description, message, photoURL}})=>{
                  return(
                    <PostModal
                    
                    key={id}
                    name={Name}
                    description={description}
                    message={message}
                 
                    />

                  )
                })
            }
      </FlipMove> 
    </div>
        
         <Article >
         
          <SharedActor>
              <a>
             
               <PersonPinIcon/>
              
          
              <div>
            
                 <span>christian ozoekwe</span> 
               <span>send your message here.....</span>
       
        
               
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
              </a>  </SharedImg>
          <SocialCounts>
              <li>
               <button>
                <img src="./images/thumb-up.png" alt="" />


                   <img src="./images/clapping.png" alt="" />
                   <span>75</span>
               </button>  
            
              </li>
           <li>   <a>2 comments</a>   </li>

          </SocialCounts>
       
         
          </div>
        </Container> 
    
       
     
    )
}
const Container = styled.div `
grid-area: main !important;
//width:100%;
background-color:transparent !important;


div{
    &:first-child{
        button>span{
            p{
                margin-left:30px; 
            }
        }
    }
}




@media (max-width:768px) {
    width: 100%;
    position:relative;
    
    div{
  
        &:first-child{
            button{
               //  border-radius:35px;
                span{
                    p{
         line-height:1;
      
       margin-left:90px;
         padding-top:12px;
         white-space:nowrap;
                    
          
                }
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


position: relative;
border: none;
border-radius:5px;

background-color : rgba(0, 0, 0, 0.08) !important;

box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0 / 20%);


`

 const ShareBox = styled(CommonCard)`
 display:flex;
 
  flex-direction:column;
color:#958b7b;
margin: 0 0 8px ;
background:#eef3f8;
padding:13px ;
margin-bottom:2px;



div{
    margin-top:0px;
    button{
        span{
            font-size:15px;
            font-weight:600;
           font-style:italic;
        }
    }
}

@media (max-width:768px) {
    div{
        button{
            img {
                width:20px;
            }
            span{
                font-size:13px;
                font-weight:600;
            }
        }
    }

    
}



div{ 
    

// background-color: #eef3f8;
z-index:5;
 position: relative;
padding:8px 8px;
  
   /* form{
        border:none !important;
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
        width:100%;
     
          
    }*/
   button{
       padding:5px;
       border:none;
        background-color:transparent;
        &:hover{
            background-color:whitesmoke;
            border-radius:12px;
        }
    
   }
    
      svg{
           position:absolute;
          left:2rem;
          padding:0 1px;
          z-index:5;
          position: relative;

      }
    &:first-child{
        display:flex;
        align-items:center;
        padding: 8px 16px 0px 16px;
         flex-wrap:nowrap;
         position: relative;
     
     
         button{
                    border:none !important;
                    position: absolute;
                    right:40px;
                    bottom:15px;
                    background-color:transparent;
                    opacity:0;

                   
                  
                  //  display:none;
                  
                }
         

 img{
            width:45px;
            border-radius:50%;
            margin-right:8px;        
 
       } 
      
       form{
        border:none !important;
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        flex:1 !important;
      
     
    
     
            input{
                z-index:4;
                position: relative;

                border-radius:35px;
            padding: 8px;
            display:flex;
            flex:1 !important;
            padding-left: 35px;
          
           
      
       
         border:none;
         outline-width:0;
         font-weight:600;
         
            &:hover{
                background-color:lightgray;
            }   
            
        }
       }

       

       

    /*span {
       
              position: relative;
           border:1px solid rgba(0, 0, 0, 0.15);
          margin: 4px  0;
          flex-grow:1;
          border-radius:35px;
          box-sizing:border-box;
     
          display:block;
         padding:0 38%;
         
        
         @media (max-width:768px) {
          
          max-width:100px;
           border:1px solid rgba(0, 0, 0, 0.15);
           box-sizing:content-box;
          // padding-left:35px;
           
         }
         
          
          
         p{
        
          line-height:1;
         position:relative;
         right:210px;
         display:flex;
     
      
         padding-top:10px;
         white-space:nowrap;
           
       
         
         
          }
   
       
    }*/
    
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
  //  margin: 0 0 8px;
    overflow:visible;
    height:50%; 
   margin-top:5px;

  

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
            border-radius:50%;
            
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
             font-size:12px;
            
             color:rgba(0, 0, 0, 0.6);
             font-style:italic;
            }
    
             span{
                 text-align:left;
             
                 &:first-child{
                     font-size:16px;
                     font-weight:700;
                     color:rgba(0, 0, 0, 1);  
                     margin-bottom:4px; 
                    
                 }
             }              

           } 

            svg{
                width:40px;
               height:40px;
               
            } 

            
           
           
        }
    button{
        
         position:absolute;
         right:15px;
        bottom:33px;
        border:none !important;
        outline:none !important;
     
    
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
text-align:center;
font-style:italic;
font-weight:600;

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
        border-radius:15px;
        }
    
`
const SocialCounts = styled.ul`
margin-top:5% 16px 0;
line-height:1.3;
display: flex;
align-items : center;
justify-content:center;
overflow: auto;

padding: 16px 16px  0 16px;
list-style-type: none;




li{
    margin-right:5px;
    font-size: 14px;
    display:flex;
   
   // border:none;
    
   
    
       
    button{
      
       padding:9px 20px;
       border-radius:10px;
       position:relative;
       z-index:5;
       border:none;
       margin-top:12px;
       border:1px solid #fff;
 
       
        img{
            width:20px;
            margin-right:7px;
      
            
        }
        span{
            font-size:14px;
            font-style:italic;
            font-weight:600;
            color:black;
        }
        &:hover{
            background-color:#fff;
            border-radius:12px;
           
        }
    }
    :last-child{
        margin-top:12px;
        margin-left:10px;
        position: relative;
        z-index:5;
       
       
      
        &:hover{
            background-color:#fff;
            border-radius:12px;
          
        }

        a{
           font-size:14px;
           font-style:italic;
           font-weight:400;
          border:1px solid #fff;
           padding:10px;
           text-align:center;
           border-radius:12px;
        }
    }
}
    
`

