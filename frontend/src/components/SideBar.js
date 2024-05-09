import React, { useState } from 'react';
import './Style.css';

function SideBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleSidebar} className={`toggle-btn ${isOpen ? 'open' : ''}`}>
                {isOpen ? '<<' : '>>'}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                
            </div>
        </div>
    );
}

export default SideBar;