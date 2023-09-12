import React, { useState, useEffect } from 'react';

function ImageListComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <div className="image-list">
        {data.map((item, index) => (
          <div key={index} className="image-card">
            <img src={item.imageUrl} alt={`Image ${index}`} />
            {/* Render other data fields here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageListComponent;
