import React, { Component } from 'react'
import logo from '../../src/logo.png'
import {Link} from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
           
           
           <div className="container"  >
               
               <div className="p-5">
               <Link className="d-flex justify-content-center" to="/">
               <img src={logo} alt="" />    
               </Link>
                
               </div>
               
           </div>
          
           
            

        )
    }
}
