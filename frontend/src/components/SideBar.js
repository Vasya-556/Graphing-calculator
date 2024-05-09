import React, { useState } from 'react';
import './Style.css';
import Footer from './Footer';

function SideBar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isFooterOpen, setIsFooterOpen] = useState(false); // State for footer

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setIsFooterOpen(false); // Close footer when sidebar is closed
    };

    const toggleFooter = () => {
        setIsFooterOpen(!isFooterOpen);
    };

    return (
        <div>
            <button onClick={toggleSidebar} className={`toggle-btn ${isSidebarOpen ? 'open' : ''}`}>
                {isSidebarOpen ? 'Close' : 'Open'} Sidebar
            </button>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                
                <Footer isOpen={isFooterOpen} toggleFooter={toggleFooter} />
            </div>
        </div>
    );
}

export default SideBar;