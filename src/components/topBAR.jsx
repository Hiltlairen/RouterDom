import React, { useState } from 'react';
import '../styles/topBAR.css'
import { Link } from "react-router-dom";
const links=[
    {
    name:'Home',
    href:'/home',
    },
    {
        name:'Contacts',
        href:'/contacts',
    },
    {
        name:'Inicio',
        href:'/inicio',
    },
]

function TopBar  ()  {
    
    return (
      
        <div className="navbar">
          <div className="centered">
            {links.map(x => (
              <Link to={x.href}>{x.name}</Link>
            ))}
          </div>
      </div>
    )
  }
  
  export default TopBar;