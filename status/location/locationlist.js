import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationList = () => {
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    // Fetch location list data from API when the component mounts
    axios.get('/api/analyticsandreporting/location/list')
      .then(response => setLocationList(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Location List</h2>
      {/* Display location list data */}
      {/* You can map through 'locationList' and render relevant components */}
    </div>
  );
};

export default LocationList;