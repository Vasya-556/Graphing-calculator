import React, { useState } from 'react';
import '../App.css';
import EntryList from './EntryList';
import { ParseEquation } from '../utils/ParseEquation';

function SideBar({onDataReceived}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleDataUpdate = (newData) => {
        const equations = newData.map((entry) => ({
            equation: ParseEquation(entry.value),
            color: entry.color || '#9c9b9a'
          }));
          onDataReceived(equations);
    };

    return (
        <div>
            <button onClick={toggleSidebar} className={`toggle-btn ${isSidebarOpen ? 'open' : ''}`}>
                 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </button>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <EntryList onDataUpdate={handleDataUpdate} />

            </div>
        </div>
    );
}

export default SideBar;