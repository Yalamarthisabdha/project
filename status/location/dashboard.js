import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    // Fetch location data from API when the component mounts
    axios.get('/api/analyticsandreporting/location')
      .then(response => setLocationData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Location Analytics Dashboard</h1>
      {/* Display location analytics data */}
      {/* You can map through 'locationData' and render relevant components */}
    </div>
  );
};

export default Dashboard;