import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Status = () => {
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    // Fetch status data from API when the component mounts
    axios.get('/api/analyticsandreporting/status')
      .then(response => setStatusData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Status Page</h2>
      {/* Display status data */}
      {/* You can map through 'statusData' and render relevant components */}
    </div>
  );
};

export default Status;