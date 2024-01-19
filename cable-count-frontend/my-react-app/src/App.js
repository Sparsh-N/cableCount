import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstSide: '',
    secondSide: '',
    cableLength: 0,
    cableId: 0,
  });

  const [cables, setCables] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.firstSide ||
      !formData.secondSide ||
      !formData.cableLength ||
      !formData.cableId
    ) {
      alert('Please complete all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:9090/cables/save', formData);
      fetchCables();
    } catch (error) {
      console.error('Error submitting cable:', error);
    }
  };

  const fetchCables = async () => {
    try {
      const response = await axios.get('http://localhost:9090/cables');
      setCables(response.data);
    } catch (error) {
      console.error('Error fetching cables:', error);
    }
  };

  const handleDelete = async (cableId) => {
    try {
      await axios.delete(`http://localhost:9090/cables/${cableId}`, {
        data: { cableId },
      });
      fetchCables();
    } catch (error) {
      console.error('Error deleting cable:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9090/cables/${searchKeyword}`
      );
      setCables(response.data);
    } catch (error) {
      console.error('Error searching cables:', error);
    }
  };

  useEffect(() => {
    fetchCables();
  }, []);

  const csvData = cables.map((cable) => ({
    'Cable ID': cable.cableId,
    'First Side': cable.firstSide,
    'Second Side': cable.secondSide,
    'Cable Length': cable.cableLength,
  }));

  return (
    <div>
      <h1>Cable Management System</h1>

      <form onSubmit={handleSubmit}>
        <label>
          First Side:
          <input
            type="text"
            name="firstSide"
            value={formData.firstSide}
            onChange={handleChange}
          />
        </label>
        <label>
          Second Side:
          <input
            type="text"
            name="secondSide"
            value={formData.secondSide}
            onChange={handleChange}
          />
        </label>
        <label>
          Cable Length:
          <input
            type="number"
            name="cableLength"
            value={formData.cableLength}
            onChange={handleChange}
          />
        </label>
        <label>
          Cable ID:
          <input
            type="number"
            name="cableId"
            value={formData.cableId}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Cable List</h2>
        <table>
          <thead>
            <tr>
              <th>Cable ID</th>
              <th>First Side</th>
              <th>Second Side</th>
              <th>Length (cm)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cables.map((cable) => (
              <tr key={cable.cableId}>
                <td>{cable.cableId}</td>
                <td>{cable.firstSide}</td>
                <td>{cable.secondSide}</td>
                <td>{cable.cableLength}</td>
                <td>
                  <button onClick={() => handleDelete(cable.cableId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CSVLink data={csvData} filename={'cables.csv'}>
          <button>Download CSV</button>
        </CSVLink>
      </div>

      <div>
        <h2>Search Cables</h2>
        <label>
          Enter Port: 
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default App;
