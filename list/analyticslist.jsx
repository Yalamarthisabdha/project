// AnalyticsList.jsx
import React from 'react';
import axios from 'axios';

class AnalyticsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analyticsData: [],
    };
  }

  componentDidMount() {
    // Fetch analytics data from API
    axios.get('/api/analytics/list')
      .then(response => this.setState({ analyticsData: response.data }))
      .catch(error => console.error('Error fetching analytics data:', error));
  }

  render() {
    // Render your analytics list based on the fetched data
    return (
      <div>
        <h2>Analytics List</h2>
        {/* Render your list using this.state.analyticsData */}
      </div>
    );
  }
}

export default AnalyticsList;