import React from 'react'
import DashbordWrapper from '../../Components/DashBordWrapper/index';
import Revenu from '../../Components/HomePage/Revenue/Revenu'
import Revenubar from '../../Components/RevenuCharts/RevenuBarChart/RevenuBar';

import './Analytics.css';


function Analytics() {
  return (
    <DashbordWrapper>
        <div className="flexbar" style={{height:'80vh'}}>
          <div className="char-container">
            <p>heading 1</p>
              <Revenu/>
           </div>
           <div className="char-container">
             <h4>heading 2</h4>
              <Revenubar/>
           </div>
          
        </div>
    </DashbordWrapper>
  )
}
export default Analytics
