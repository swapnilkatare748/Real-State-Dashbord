import React from 'react'
import DashbordWrapper from '../../Components/DashBordWrapper/index';
import SendEmailForm from '../../Components/NotificationsPageCom/EmailSendForm/SendEmail';
import './Notifications.css';

function Notifications() {
  return (
     <DashbordWrapper>
        <div style={{height:'80vh'}}>
              <div className="content">
              <SendEmailForm/>
              </div>    
        </div>
     </DashbordWrapper>
  )
}  

export default Notifications
