// Dashboard.jsx
import React from 'react';
import AnalyticsList from './AnalyticsList';
import ReportingList from './ReportingList';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <AnalyticsList />
    <ReportingList />
  </div>
);

export default Dashboard;