import React from 'react';
import styled from "styled-components";

const PostModal = (props) => {
  return (
    <div>
        <Container>
            <Content>

            </Content>
        </Container>
    </div>
  )
}

export default PostModal


const Container = styled.div`
position: fixed;
top: 0;
left:0;
right: 0;
bottom :0;
z-index: 9999;
color: black;
background-color : rgba(0, 0, 0, 0.8);
    
`
const Content = styled.div`
width:100;
max-width:552px;




`