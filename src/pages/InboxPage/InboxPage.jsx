import React from 'react'
import DashbordWrapper from '../../Components/DashBordWrapper/index';
import Massages from '../../Components/inboxPageComponent/InboxPagMassages/Massages';
import './inboxPage.css';
function InboxPage() {
  return (
          <DashbordWrapper>
            <div className="flex-center" style={{height:'80vh'}}>
                <div className="massages">
                  <Massages/>
                </div>
            </div>
          </DashbordWrapper>
  )
}

export default InboxPage
