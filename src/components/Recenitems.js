
import styled from "styled-components"
import React from "react"


const RecentItems = ((topic)=>{
    <BarItems>
       
      
       <BarHash>
        <div>
        <p>Recent</p>
        </div>

           <span>#</span>
           <p>{topic}</p>

       </BarHash>
    </BarItems>
})



 export default RecentItems;
const BarItems = styled.div`


        
    `
const BarHash = styled.span`
p{
    text-align:left;
    padding:10px;
    border: 1px solid lightgray;
    background-color: #eef3f8;
    border-radius:10px;
    margin-top:10px;
}

      
      `