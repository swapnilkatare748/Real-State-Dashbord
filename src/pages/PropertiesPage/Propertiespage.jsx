import React from 'react'
import './Propertiespage.css';
import DashbordWrapper from '../../Components/DashBordWrapper/index';
import Properties from '../../Components/PropertisPage/Properties/Properties';
function Propertiespage() {
  return (
    <DashbordWrapper>
        <div className="flex-center" style={{height:'80vh', width:"95%" ,margin:"auto"}}>
             <div className="property-container">
             <Properties/>   
             </div>
        </div>
    </DashbordWrapper>
  )
}

export default Propertiespage