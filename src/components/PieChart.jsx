import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class PieChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [2000000, 1750000,1250000 , 3000000,1500000],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Kliner Services', 'Apache', 'Dragon', 'Middlelown Energy', 'Wildcallers'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    }
  }

  render() {
    return (
      <div id="chart" className="App">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={480}
        />
      </div>
    )
  }
}

export default PieChart
