import React, { useState } from "react";

const Testing = () => {
  // Sample data array
  const [data, setData] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
  ]);

  // Handle input change
  const handleChange = (id, newValue) => {
    // Update the data state with new values
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      )
    );
  };

  // Handle form submission
  const handleSubmit = () => {
    // Process data here
    console.log(data);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <input
            type="text"
            value={item.value}
            onChange={(e) => handleChange(item.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Testing;
