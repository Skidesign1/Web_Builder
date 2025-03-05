import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { 
  MagnifyingGlassIcon, XCircleIcon, HomeIcon, Squares2X2Icon, Cog6ToothIcon, 
  QuestionMarkCircleIcon, WrenchScrewdriverIcon, ChartBarIcon, DocumentTextIcon 
} from '@heroicons/react/24/solid';
import ResponsiveNavbar from '../components/ResponsiveNavbar'; // Import ResponsiveNavbar

// Draggable component
const Draggable = ({ id, name, icon, component }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="cursor-move flex items-center">
      {icon}
      <span className="ml-2">{name}</span>
      {component && <div className="hidden">{component}</div>}
    </div>
  );
};

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Component lists
  const coreItems = [
    { id: 'navbar', text: 'Navbar', icon: <HomeIcon className="w-4 h-4" />, component: <ResponsiveNavbar /> },
    { id: 'header', text: 'Header', icon: <ChartBarIcon className="w-4 h-4" /> },
    { id: 'sidebar', text: 'Side Bar', icon: <QuestionMarkCircleIcon className="w-4 h-4" /> },
    { id: 'mainbody', text: 'Main body', icon: <Cog6ToothIcon className="w-4 h-4" /> },
    { id: 'footer', text: 'Footer', icon: <DocumentTextIcon className="w-4 h-4" /> },
  ];

  const presentsItems = [
    { id: 'buttons', text: 'Buttons', icon: <WrenchScrewdriverIcon className="w-4 h-4" /> },
    { id: 'labels', text: 'Labels', icon: <Squares2X2Icon className="w-4 h-4" /> },
    { id: 'icon', text: 'Icon', icon: <Cog6ToothIcon className="w-4 h-4" /> },
  ];

  // Filtered lists based on search input
  const filteredCoreItems = coreItems.filter(item =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPresentsItems = presentsItems.filter(item =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="bg-gray-100 h-full w-full p-4 relative">

           {/* Sidebar Header */}
      <div className="flex flex-col gap-2 justify-start items-center mt-4">
        <h6><strong>dnd kit</strong></h6>

        {/* Search Input */}
        <div className="flex items-center gap-2 px-1 w-full border rounded focus-within:ring-2 focus-within:ring-blue-400">
          <MagnifyingGlassIcon className="w-4 cursor-pointer text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="Search component"
            className="w-full px-2 py-1 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <XCircleIcon 
              className="w-4 cursor-pointer text-gray-500 hover:text-red-500 mr-2"
              onClick={() => setSearchTerm("")}
            />
          )}
        </div>
      </div>

   
      {/* Scrollable section for components */}
      <div>
        {/* Core Components */}
        <h2 className='mt-5'><strong>Components</strong></h2>
        <ul className="w-full relative">
          {filteredCoreItems.length > 0 ? (
            filteredCoreItems.map(item => (
              <li key={item.id} className="flex  items-center gap-2 p-1 hover:bg-gray-200 rounded">
                <Draggable id={item.id} icon={item.icon} name={item.text} component={item.component} />
              </li>
            ))
          ) : (
            <p className="text-gray-500">No components found</p>
          )}
        </ul>

        {/* Example Components */}
       
      </div>
            <h2 className='mt-3'><strong>Examples</strong></h2>
             <ul className="w-full">
                  {filteredPresentsItems.length > 0 ? (
                    filteredPresentsItems.map(item => (
                      <li key={item.id} className="flex items-center gap-1 p-1 hover:bg-gray-200 rounded">
                        <Draggable id={item.id} icon={item.icon} name={item.text} />
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">No examples found</p>
                  )}
        </ul>

    </aside>
  );
};

export default Sidebar; 
