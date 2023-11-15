// app.js or index.js
const express = require('express');
const app = express();
const analyticsRoutes = require('./api/analyticsRoutes');
const reportingRoutes = require('./api/reportingRoutes');

// Use your routes
app.use('/api/analytics', analyticsRoutes);
app.use('/api/reporting', reportingRoutes);

// Other server setup code...

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});