import React from 'react'
import './HomePage.css';
import DashbordWrapper from '../../Components/DashBordWrapper/index';
import Revenu from '../../Components/HomePage/Revenue/Revenu';
import Properties from '../../Components/HomePage/Properties/Properties';
import PropertyRequest from '../../Components/HomePage/PropertyRequest/PropertyRequest';
import Rightbar from '../../Components/HomePage/RightBar/Rightbar';

function HomePage() {
  return (
    <DashbordWrapper>
         <section className='homepage'>
         <Revenu/>
         </section>
            <div className="cluster-wrapper">
              <div className="left-cluster">
               <Properties/>
               <PropertyRequest/>
              </div>
              <div className="right-cluster no-scrollbar">
                <Rightbar/>
              </div>
            </div>
        
    </DashbordWrapper>
  )
}

export default HomePage
