import React from 'react';
import './Revenu.css';
import Chart from "react-apexcharts"; 
import revenueChartConfigration from '../../../config/revenueChartConfig';

function Revenu() {
  return (
    <div className='RevenuBar'>
       <Chart
       {...revenueChartConfigration}
       type='area'
       width={'100%'}
       height={'100%'}
       />
    </div>
  )
}

export default Revenu
