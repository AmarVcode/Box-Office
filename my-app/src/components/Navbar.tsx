import React from 'react'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './styles/Navbar.scss'

const Navbar = () => {

    const [menustate,setclasses]=useState("navbar");

    const classchanger=()=>{
if(menustate === "navbar"){
    setclasses("navbar shownavbar")
}
else{
    setclasses("navbar")

}

        console.log(menustate)
    }

  return (
        <header>
         <div className="menu" onClick={()=> classchanger()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
    <div className={menustate} id='navbar'>
        <Link to={'/'} >Home</Link>
        <Link to={'fav'} >Favorites</Link>
        <Link to={'about'} >About</Link>

    </div>
        </header>
  )
}

export default Navbar