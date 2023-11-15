import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditList = () => {
  const [editList, setEditList] = useState([]);

  useEffect(() => {
    // Fetch edit list data from API when the component mounts
    axios.get('/api/analyticsandreporting/edit/list')
      .then(response => setEditList(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Edit List</h2>
      {/* Display edit list data */}
      {/* You can map through 'editList' and render relevant components */}
    </div>
  );
};