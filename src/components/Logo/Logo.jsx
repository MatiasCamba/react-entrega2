import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom';

const Logo = () => {
    const imagenLogo = "https://thumbs.dreamstime.com/b/herbal-food-logo-26585479.jpg";
  return (
    <Link to={"/"}>
    <img className= "imgLogo" src={imagenLogo} alt="logo de una hoja verde" />
    </Link>
        
    
  )
}

export default Logo