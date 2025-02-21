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
    <div className="canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
      {/* Canvas content here */}
    </div>
  );
};

export default Canvas;
