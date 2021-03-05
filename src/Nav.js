import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {

const [show, handleShow] = useState(false);    

useEffect(()=>{
window.addEventListener("scroll" , () => {
if(window.scrollY > 100){
    handleShow(true)
}else handleShow(false)

});
return () => {
  window.removeEventListener("scroll")  
}

},[])


    return (
        <div className={`nav ${show && "nav_black"}`}>
        <img  className ="nav_logo"
        src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png" 
        alt ="Netflix Logo" 
        
        />

        <img className ="nav_avatar" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="NetFlix avatar"
        />
            
        </div>
    )
}

export default Nav
