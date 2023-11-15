// ReportingList.jsx
import React from 'react';
import axios from 'axios';

class ReportingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportingData: [],
    };
  }

  componentDidMount() {
    // Fetch reporting data from API
    axios.get('/api/reporting/list')
      .then(response => this.setState({ reportingData: response.data }))
      .catch(error => console.error('Error fetching reporting data:', error));
  }

  render() {
    // Render your reporting list based on the fetched data
    return (
      <div>
        <h2>Reporting List</h2>
        {/* Render your list using this.state.reportingData */}
      </div>
    );
  }
}

export default ReportingList;