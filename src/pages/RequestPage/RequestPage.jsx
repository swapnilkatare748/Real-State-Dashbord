import React from 'react'
import DashbordWrapper from '../../Components/DashBordWrapper/index';
import Request from '../../Components/RequestpageComponents/Request';
import './RequestPage.css';


function RequestPage() {
  return (
      <DashbordWrapper>
      <div className="flex-center" style={{height:'80vh'}}>
         <div className="Reqest">
            <Request/>           
        </div>
      </div>
      </DashbordWrapper>
  )
}

export default RequestPage
