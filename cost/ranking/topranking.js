import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopRanking = () => {
  const [topRanking, setTopRanking] = useState([]);

  useEffect(() => {
    // Fetch top ranking data from API when the component mounts
    axios.get('/api/analyticsandreporting/ranking/top')
      .then(response => setTopRanking(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Top Ranking</h2>
      {/* Display top ranking data */}
      {/* You can map through 'topRanking' and render relevant components */}
    </div>
  );
};
