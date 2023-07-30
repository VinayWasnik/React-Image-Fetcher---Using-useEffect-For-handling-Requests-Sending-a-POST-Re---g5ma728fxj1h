import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [photoData, setPhotoData] = useState(null);
  cost [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
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
