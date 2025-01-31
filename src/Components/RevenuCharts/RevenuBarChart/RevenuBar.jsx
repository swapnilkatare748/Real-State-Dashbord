import React from 'react';
import './Revenubar.css';
import Chart from 'react-apexcharts';
import revenueChartConfigration from '../../../config/revenueChartConfig';

function Revenu() {
  // You can customize the chart configuration here if needed.
  const updatedRevenueChartConfigration = {
    ...revenueChartConfigration,
    type: 'bar', // Set the type to 'bar' for a bar chart
  };

  return (
    <div className="RevenuBar">
      <Chart
        {...updatedRevenueChartConfigration}
        type="bar"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Revenu;
