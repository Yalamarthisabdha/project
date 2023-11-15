// Dashboard.jsx
import React from 'react';
import AnalyticsTable from './AnalyticsTable';
import ReportingTable from './ReportingTable';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <AnalyticsTable />
    <ReportingTable />
  </div>
);

export default Dashboard;