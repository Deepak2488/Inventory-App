import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {
  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June',],
      datasets: [
        {
          label: 'Wallmart',
          backgroundColor: '#87CEEB',
          borderColor: '#87CEEB',
          data: [1500, 1300, 1050, 800, 500, 300]
        },
        {
          label: 'Amazon',
          backgroundColor: '#0000FF',
          borderColor: '#0000FF',
          data: [1000, 800, 750, 500, 300, 150]
        }
      ]
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    return (
      <div>
        <Bar data={data} options={options} />
      </div>
    );
  }
}

export default BarChart;