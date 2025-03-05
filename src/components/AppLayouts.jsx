import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Canvas from './Canvas';
import { DndContext } from '@dnd-kit/core';
import OverComponent from "./OverComponent";
import { componentsCode } from './componentsCode';

const AppLayout = () => {
  const [components, setComponents] = useState([]);
  const navigate = useNavigate();

  const handleDragEnd = (event) => {
    const { active } = event;
    if (active.id) {
      setComponents((prev) => [...prev, { name: active.id, code: componentsCode[active.id] }]);
    }
  };

  const handleToggleEditor = () => {
    navigate('/code-editor', { state: { components } });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='maincont bg-black relative' >
        <Navbar onToggleEditor={handleToggleEditor} />
        <div className="mygrid relative">
          <div className='myborder'>
            <Sidebar />
          </div>
          <div className='border-2 border-dashed bg-black'>
              <Canvas />
            {components.map((item, index) => (
              <OverComponent key={index} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </DndContext>
  );
};


export default AppLayout;
