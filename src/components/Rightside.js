import React from 'react'
import styled from "styled-components"

const RightSide = (props) => {
    return (


        
        <>

        
        <Container>

        
        <FollowCard>
           

        
        <Title>
        
        <h3> Add to your feed </h3>    
        <img src = "./images/feed-icon.svg"
        alt = "" />

        
        </Title>     
        <FeedList>



        
        <li>

        
        <a>

        <Avatar/>
        </a>    
        <div>



        
        <span> #LinkedIn </span>     
        <button> Follow </button>       
        </div>    
        </li>    
        <li>



        
       < a> < Avatar /> </a>    
        <div>



        
        <span> #video 
        </span>    
        <button> Follow </button>    
        </div>    
        </li>    
        </FeedList>    
        <Recommendation> View all recommendation 
        <img src = "/images/right-icon.svg"
        alt = "" />

        </Recommendation>
        

        
        </FollowCard>   
         
           <BannerCard>
                <img src="./images/job-adv3.jpg" alt="" />
            </BannerCard>
        
        </Container>    
        </>

    )
}
const Container = styled.div `
grid-area: rightside;




@media (max-width:768px){
    width:100%;
   
    
}


`
export default RightSide

const FollowCard = styled.div `
text-align: center;
overflow: hidden;
margin-bottom:80px;
background-color:#eef3f8;
border-radius: 5px;
position: relative;


border: none;
box-shadow: inset 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
padding: 10px;
height:250px;

`

const BannerCard = styled.div`

img{
    box-sizing:content;
    width:100%;
    position: relative;
    bottom:60px;
  
    
}
    
`






const Title = styled.div `
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
`
const FeedList = styled.ul `
margin-top: 16px;

  position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    list-style-type: none;
  
    
li{
  
    
    margin:8px 0;
    position: relative;
   right:33px;
   font-size: 14px;
   
   & > div{
       display: flex;
       flex-direction: column;
       margin-bottom:-50px;
       span{
          position: relative;
          left:25px;
          bottom:47px;
       }
   }
   button{
       background-color: transparent;
       color: rgba(0, 0, 0, 0.6);
       box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
       padding: 12px;
       align-items: center;
       border-radius: 15px;
       box-sizing: content-box;
       font-weight: 600;
       margin-left:55px ;
       position: relative;
       bottom:50px;
     
       display: inline-flex;
       justify-content: center;
       
       width:40px;
       height:3px;
       
       text-align: center;
       outline-style:none;
       

   }


}
    
`

const Avatar = styled.div `
background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width:48px;
height: 48px;
margin-right: 8px;
    
`
const Recommendation = styled.a `
color: #4d79ff;

`






















