// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [reportingData, setReportingData] = useState([]);

  useEffect(() => {
    // Fetch analytics data from API
    axios.get('/api/analytics')
      .then(response => setAnalyticsData(response.data))
      .catch(error => console.error('Error fetching analytics data:', error));

    // Fetch reporting data from API
    axios.get('/api/reporting')
      .then(response => setReportingData(response.data))
      .catch(error => console.error('Error fetching reporting data:', error));
  }, []);

  return (
    <div>
      {/* Display analyticsData and reportingData as needed */}
    </div>
  );
};

export default Dashboard;