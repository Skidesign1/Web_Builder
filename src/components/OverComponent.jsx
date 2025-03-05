import React from 'react';
import { myImage } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css"


const OverComponent = ({ name }) => {

  const divRef=React.useRef(null)

  const handleClick=()=>{

     divRef.current.remove()

  }



  if (name === "navbar") {
    return (
  

         <div  ref={divRef}    style={{position:"absolute", top:"0px", height:"6rem", backgroundColor:"blue"   }} className='overstyle' >
              <i className='fa fa-times'  onClick={()=> handleClick() }     style={{position:"absolute", top:"0px", right:"40px"  }}   ></i>
              <h1>{name}</h1>
    
         </div>


    );
  } else if (name === "mainbody") {
    return (
      <div   ref={divRef}  style={{ position: "absolute", top: "83px", height: "435px", backgroundColor: "darkblue", color: "white" }} className='overstyle'>
              <i className='fa fa-times'  onClick={()=>handleClick()}     style={{position:"absolute", top:"0px", right:"40px"  }}   ></i>
             <h1>{name}</h1>      
      </div>
    );
  }


};


export default OverComponent;
