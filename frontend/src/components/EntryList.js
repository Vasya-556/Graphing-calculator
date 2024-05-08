import React, { useState } from 'react';

const EntryList = ({ onDataUpdate }) => {
  const [entries, setEntries] = useState(['']);

  const handleChange = (index, value) => {
    const newEntries = [...entries];
    newEntries[index] = value;
    setEntries(newEntries);

    // Add a new empty entry if the last entry is being edited
    if (index === entries.length - 1 && value !== '') {
      setEntries([...newEntries, '']);
    }

    onDataUpdate(newEntries);
  };

  const handleDelete = (index) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);

    onDataUpdate(newEntries);
  };

  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index}>
          <input
            type="text"
            value={entry}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          {entry !== '' && (
            <button onClick={() => handleDelete(index)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default EntryList;
