import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import NewReleasesIcon from '@mui/icons-material/NewReleases';





const RightSide = () => {









    return (


    
        
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

       

       <Articles>
   

            <div> 
            <Icons>    
       
       <p>   LinkedIn News  <NewReleasesIcon/> </p>
       </Icons> 
      

      <h4> <FiberManualRecordIcon/> UK Updates</h4>
      <span>New Technology <a> 300 readers</a></span>
      

      <h4> <FiberManualRecordIcon/> Tesla Hits</h4>
      <span>Cars & Autos <a> 600 readers</a> </span>

      <h4> <FiberManualRecordIcon/> Crypto</h4>
      <span>Crypto Miners <a> 750 readers</a> </span>

      <h4> <FiberManualRecordIcon/> BBC News</h4>
      <span>Ukraine War <a> 635 readers</a> </span>
      
      <h4> <FiberManualRecordIcon/> Stock Markets</h4>
      <span> Decline in prices <a> 300 readers</a> </span>

      <h4> <FiberManualRecordIcon/> Sports</h4>
      <span>Football<a> 720 readers</a> </span>


      <h4> <FiberManualRecordIcon/> African Crisis</h4>

      <span>How Bad it is<a> 300 readers</a> </span>
    
      </div>

       </Articles>
    
      
        
        </Container> 
      
    

    )
}
const Container = styled.div `
grid-area: rightside;
background-color : rgba(0, 0, 0, 0.08) !important;
border:1px solid lightgray;
border-radius:10px;
width:auto;
height:28.7%;








@media (max-width:768px){
 
   
    
}


`
export default RightSide

const Articles = styled.div`
display:flex;
align-items:flex-start;
justify-content:flex-start !important;
border:2px solid lightgray;
border-radius:20px;
padding-bottom:10px;
padding-top:8px;
padding-left:5px;
margin-top:-50px;
position: relative;

div{
    line-height:0;
   // position: absolute;
 
   
   

    span{
    
         padding-left:10px;
        font-size:14px;
       
        &:hover{
           color:lightcoral;
        }
        a{
            font-size:13px;
            font-style:italic;
            color:green;
            &:hover{
               color:blue;
            }

        }
    }
    


    h4{
        display:flex;
    justify-content:flex-start;
    align-items:center;
 
    padding-left:5px;
    &:hover{
        background-color:lightsteelblue;
        width:auto;
        border-radius:10px;
        //padding:5px;
    }
    &:hover{
        svg{
            background-color:lightslategrey;
            border-radius:50%;
          
           
        }
    }
}


@media (max-width:768px) {
    height:100%;
    width:100%;
    margin-bottom:15%;
    
    
}


    


}

`

const FollowCard = styled.div `
text-align: center;
overflow: hidden;
margin-bottom:80px;
//background-color:#eef3f8;
border-radius: 5px;
position: relative;


border: none;
box-shadow: inset 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
padding: 10px;
height:250px;

`

const Icons = styled.a`
display:flex;
align-items:center;
justify-content:flex-start;

p{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding-left:5px;
    font-size:16px;
    &:hover{
        color:gray;
    }
}
    


`

const BannerCard = styled.div`

img{
    box-sizing:content;
    width:100%;
    position: relative;
    bottom:60px;
    border-radius:12px;
  
    
}
    
`






const Title = styled.div `
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
    &:hover{
        color:lightslategray;
    }
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
z-index:5;
position: relative;




&:hover{
    color:lightslategray;
}


img{
    vertical-align:middle;
    &:hover{
        background-color:lightslategray !important;
        border-radius:50%;
 
    }


}






`






















