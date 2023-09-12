import React, { useRef, useState } from 'react';
import './Dropbox.css'; // Import your custom CSS file for styling
import MyCarousel from './MyCarousel';

function Dropbox() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to trigger the file input dialog
  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  // Function to handle file upload
  const handleUpload = () => {
    // You can implement the file upload logic here, e.g., using FormData and sending it to a server.
    if (selectedFile) {
      // Display a message or trigger the file upload process.
      alert(`Selected file: ${selectedFile.name}`);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="dropbox-container">
      <div className="dropbox">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef} // Associate the file input with the ref
          style={{ display: 'none' }} // Hide the file input
        />
        <label className="upload-button" onClick={handleChooseFile}>
          Choose Image
        </label>
        <button className="upload-button" onClick={handleUpload}>
          Upload Image
        </button>
      </div>
      <MyCarousel/>
    </div>
  );
}

export default Dropbox;
