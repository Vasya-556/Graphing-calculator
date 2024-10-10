import React, { useState } from 'react';
import CoordinateSystem from './components/CoordinateSystem';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import './App.css';
// import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [equations, setEquations] = useState([]);

  const receiveDataFromSideBar = (newData) => {
    const equationsData = newData.map(entry => {
      return {
        equation: entry.equation || '',
        color: entry.color || '#000000' // Default color if not provided
      };
      
    });
    // Set equations data
    setEquations(equationsData);
  };

  return (
    
    <div className='main'>
      <Header />
      <SideBar onDataReceived={receiveDataFromSideBar} />
      <CoordinateSystem equations={equations}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;