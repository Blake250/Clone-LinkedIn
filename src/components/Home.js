import React from 'react';
import styled from "styled-components";
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';
import "bootstrap/dist/css/bootstrap.css";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const Home = (props) => {
    return ( 
        < > 
        <Container>
            {!props.user &&  <Navigate to={"/"}/>}
            <Section>
                <h4>
                    <a>Hiring in a hurry?-</a>
                </h4>
                <p className='d-flex flex-wrap'>
              Find talented pros in record time with upwork and keep business 
                </p>
                <p>moving</p>
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

 const mapStateToProps = (state)=>{
    return{
       user :  state.userState.user
    }
}

export default connect(mapStateToProps)(Home)

const Container = styled.div`
padding-top: 52px;
max-width: 100%;

`
const Section=styled.div`
max-height: 50px;
padding: 16px 0;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
display: flex;
justify-content: center;


h4{
    color: #4d79ff;
    font-size: 14px;
    a{
        font-weight: 700;
    }
}
p{
    font-size: 16px;
    color: #434644;
    font-weight: 600;
   
  
}
@media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
    line-height: 0;
    
    white-space: nowrap

    
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