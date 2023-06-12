import React from 'react';

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>25</td>
          <td>AUS</td>
        </tr>
        <tr>
          <td>Dravid</td>
          <td>40</td>
          <td>IND</td>
        </tr>
        <tr>
          <td>Tim</td>
          <td>30</td>
          <td>ENG</td>
        </tr>
        <tr>
          <td>Virat</td>
          <td>35</td>
          <td>IND</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;