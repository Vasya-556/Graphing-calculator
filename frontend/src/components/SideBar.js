import React, { useState } from 'react';
import './Style.css';

function SideBar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <button onClick={toggleSidebar} className={`toggle-btn ${isSidebarOpen ? 'open' : ''}`}>
                {isSidebarOpen ? 'Close' : 'Open'} Sidebar
            </button>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {/* Content of the sidebar */}
            </div>
        </div>
    );
}

export default SideBar;