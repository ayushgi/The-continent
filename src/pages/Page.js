import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Page.css';

function Page2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/items'); // Update the URL to match your API endpoint
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Carousel showThumbs={false} showArrows={true} autoPlay={true} interval={2000}> 
        {data.map((item) => (
          <div key={item._id} className="carousel-item">
            <div className="image-container">
              <img src={item.image_url} alt={item.name} className="rounded-image" />
            </div>
            <p className="name">{item.name}</p>
            <p className="information">{item.information}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Page2;
