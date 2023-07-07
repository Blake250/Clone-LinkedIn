import React from 'react';
import styled from "styled-components";
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';


const Home = () => {
    return ( 
        < > 
        <Container>
          
            <Section>
            
                <h4>
                <a> Hiring in a hurry ?</a>
                </h4>
             
             
                <p >
                <a> Find talented pros in record time </a>

                </p>
                
               
            </Section>
            <LayOut>
              <Leftside/>
           
               <Main/>
              <Rightside/>

           
            </LayOut>
            
          
        </Container>
        
        
         </>
    )
}
export default Home;


const Container = styled.div`
padding-top: 62px;
//max-width:100%;
@media (max-width:768px) {
    
    padding-top:20px;
}


`
const Section=styled.div`
//max-height: 50px;
padding: 16px 16px 16px 16px;
//padding-top:30px;
box-sizing: content-box;
text-align: center;
//text-decoration: underline;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
line-height:0;

position: relative;
z-index:5;




h4{
    &:hover{
      color:black;
    
        border-radius:3px;
    }
   
}
    
p{
   
    font-style:italic;
    font-weight:600;
  
    a{
   
    z-index:5;
    position: relative;
  
   padding:5px;
    &:hover{
        background-color:lightgray;
        border-radius:12px;
       
   
    }
}

}

@media (max-width: 768px){
    flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
position: relative;
z-index: 5;

overflow-y: hidden;
//margin-bottom:10px;

p{
  
    font-style:italic;
    font-weight:600;
   // color:lightgray;
   width:50% !important;
    &:hover{
        background-color:lightgray;
        border-radius:10px;
    }
   
    

}











    
}



h4{
    color: #4d79ff;
    font-size: 14px;
    font-style:italic;
    text-decoration:none;

    font-weight:bold;
    a{

        font-weight: 500;
        padding-top:12px;
     
  
    }
}


`

const Content = styled.div`
max-width: 1128px;
margin-left: auto;
margin-right: auto;


`
const LayOut=  styled.div`
display: grid;
grid-template-areas: "leftside main rightside ";
grid-template-columns: minimax(0, 5px) minimax(0, 12px) minimax(300px, 7px);
column-gap: 25px;
row-gap: 25px;
grid-template-rows: auto;
margin: 25px 0;
padding:0 8px;
@media (max-width:760px) {
    display: flex;
    flex-direction: column;
    padding:0 8px

}


`