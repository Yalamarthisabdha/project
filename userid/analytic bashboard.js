// AnalyticsDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    // Fetch analytics data from the API
    axios.get('/api/analytics')
      .then(response => setAnalyticsData(response.data))
      .catch(error => console.error('Error fetching analytics data:', error));
  }, []);

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <ul>
        {analyticsData.map(data => (
          <li key={data._id}>{data.metric}: {data.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsDashboard;
