import React from 'react';
import { useCode } from "../context/CodeContext";
import { ChartBarIcon, Cog8ToothIcon, DocumentCheckIcon } from "@heroicons/react/24/solid";
import { componentsCode } from './componentsCode'; // Ensure this import is correct

const Canvas = () => {
  const { code, setCode } = useCode();

  const handleDrop = (event) => {
    event.preventDefault();
    const component = event.dataTransfer.getData("component");

    let newCode = "";
    if (component === "navbar") {
      newCode = componentsCode['navbar']; // Use the new navbar code
    } else if (component === "mainbody") {
      newCode = componentsCode['mainbody'];
    } else if (component === "footer") {
      newCode = componentsCode['footer'];
    }
    
    if (newCode) {
      setCode((prevCode) => prevCode + "\n" + newCode);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div   className='w-full h-full  bg-slate-200 '   onDrop={handleDrop} onDragOver={handleDragOver}>
      
         <div  className='first-layout flex items-center justify-center text-2xl '>
               <h1>Header</h1>  
         </div>


         <div className='second-layout flex items-center justify-center text-2xl'>
              <h1>Main-body</h1>
         </div>
   

         <div  className='h-20 flex items-center justify-center text-2xl' >
              
              <h1>Footer</h1>

         </div>
          
    </div>
  );
};

export default Canvas;
