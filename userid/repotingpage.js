// ReportingPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportingPage = () => {
  const [reportingData, setReportingData] = useState([]);

  useEffect(() => {
    // Fetch reporting data from the API
    axios.get('/api/reporting')
      .then(response => setReportingData(response.data))
      .catch(error => console.error('Error fetching reporting data:', error));
  }, []);

  return (
    <div>
      <h1>Reporting Page</h1>
      <ul>
        {reportingData.map(data => (
          <li key={data._id}>{data.reportType}: {data.reportContent}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReportingPage;
