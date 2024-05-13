import React, { useState } from 'react';
import { GetRandomColor } from '../utils/GetRandomColor';

const EntryList = ({ onDataUpdate }) => {
  const [entries, setEntries] = useState([{ value: '', deleteVisible: false }]);

  const handleChange = (index, value, color) => { // Update handleChange to accept color
    const newEntries = [...entries];
    newEntries[index].value = value;
    newEntries[index].color = color; // Assign color to the entry

    if (!newEntries[index].deleteVisible && value.trim() !== '') {
      newEntries[index].deleteVisible = true;
    }

    if (index === newEntries.length - 1 && value !== '') {
      newEntries.push({ value: '', deleteVisible: false });
    }

    setEntries(newEntries);
    onDataUpdate(newEntries.map(entry => ({ value: entry.value, color: entry.color }))); // Send data with color
  };

  const handleDelete = (index) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
    onDataUpdate(newEntries.map(entry => ({ value: entry.value, color: entry.color })));
  };

  const handlePress = (index) => {
    const newColor = GetRandomColor(); // Get random color
    handleChange(index, entries[index].value, newColor); // Update handleChange to include color
  }

  return (
    <div className='EntryList'>
      <h3>Enter your equation</h3>
      {entries.map((entry, index) => (
        <div className='Entry' key={index}>
          <input
            className='Input-field'
            type="text"
            value={entry.value}
            onChange={(e) => handleChange(index, e.target.value, entry.color)}
          />
          {entry.deleteVisible && (
            <>
            <button 
            className='Delete-button' 
            onClick={() => handleDelete(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
            </button>
            <button 
            className='Color-button' 
            style={{ backgroundColor: entry.color || '#9c9b9a' }} 
            onClick={() => handlePress(index)}>

            </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default EntryList;