import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Mycarousel.css'; // Import your custom CSS file

function MyCarousel() {
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
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        emulateTouch={true}
        showStatus={false} // Optional: Hide status indicators
        showThumbs={false} // Optional: Hide thumbnails
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button onClick={onClickHandler} title={label} className="custom-arrow prev">
              &#8249;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button onClick={onClickHandler} title={label} className="custom-arrow next">
              &#8250;
            </button>
          )
        }
      >
        {data.map((item) => (
          <div key={item._id} className="carousel-card">
            <img src={item.image_url} alt={item.name} className="carousel-image" />
            <div className="carousel-content">
              <p className="carousel-name">{item.name}</p>
              <p className="carousel-information">{item.information}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
