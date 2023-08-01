import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [photoData, setPhotoData] = useState(null);
  cost [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);import React, { useState } from 'react';
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';

const App = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [photoData, setPhotoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${inputNumber}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIsLoading(false);
      setPhotoData(data);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    if (!inputNumber) return;
    fetchData();
  };

  return (
    <div>
      <input
        type="number"
        value={inputNumber}
        onChange={handleInputChange}
        placeholder="Enter a number between 1 and 5000"
      />

      <button onClick={handleSearch}>Search</button>

      {isLoading && <Loader />}

      {photoData && (
        <PhotoFrame url={photoData.url} title={photoData.title} />
      )}
    </div>
  );
};

export default App;

};

const fetchData = () => {
  setIsLoading(true);
  fetch(`https://jsonplaceholder.typicode.com/photos/${inputNumber}`)
  .then((response) => response.json())
  .then((data) => {
    setIsLoading(false);
    setPhotoData(data);
  })
  .catch((error) => {
    setIsLoading(false);
    console.error('Error fetching data:', error);
  });
};

const handleSearch = () => {
  if(!inputNumber) return;
  fetchData();
};

return (
  <div>
  <input
  type="number"
    value={inputNumber}
      onChange={handleInputChange}
        placeholder="Enter a number between 1 and 5000"
          />
          
          <button onClick={handleSearch}>Search</button>
  
  {isLoading && <Loader />}

  {photoData && (
    <PhotoFrame url={photoData.url} title={photoData.title} />
  )}
  </div>
);
};



export default App;
