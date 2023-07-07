/*import "./stylings/headerOption.css"
import React from 'react'
import { useState } from "react"

const HeaderOption = ({Icon, title}) => {
    const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

const notSetButtonHovered = (()=>{
    setIsActive(false)
 }) 
 const SetButtonHovered = (()=>{
    setIsActive(true)
 })
 const hoverClass = isHovered ? 'headerOption_hovered' : '';
    
  return (
    <div 
    
    className={`headerOption ${hoverClass}`}
    onMouseEnter={SetButtonHovered}
    onMouseLeave={notSetButtonHovered}
    
    >
        
        {Icon && <Icon className='headerOption_icon'/>}
        <span  className='headerOption_title'  >{title}</span>
        
    
    
    </div>
  )
}

export default HeaderOption*/



