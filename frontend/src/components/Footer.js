import React, { useState } from 'react'
import Keyboard from './Keyboard';

function Footer() {
    const [isVisible, setIsVisible] = useState(true);
    const [isLayout1, setIsLayout1] = useState(true);

  const toggleFooter = () => {
    setIsVisible(!isVisible);
  };

  const toggleLayout = () => {
    setIsLayout1(!isLayout1);
  };

  return (
    <>
      <footer className={`footer ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="footer-content">
        {/* {isLayout1 ? 
            <div>

            <Keyboard/>

            </div> : 
            <div>

            <h1>456</h1>


            </div>} */}
        </div>
        <Keyboard isLayout1={isLayout1} />
      <button className="toggle-layout-button" onClick={toggleLayout}>
        {isLayout1 ? '123' : 'ABC'}
      </button>
      </footer>
      <button className="toggle-button" onClick={toggleFooter}>
        {isVisible ? 'Hide Footer' : 'Show Footer'}
      </button>
    </>
  );
}

export default Footer