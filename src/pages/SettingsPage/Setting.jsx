import React from 'react'
import './Setting.css';
import DashbordWrapper from '../../Components/DashBordWrapper/index';
import UserProfile from '../../Components/Setting/UserProfile/UserProfile';
import AdminSettings from '../../Components/Setting/AdmineSetting/AdmineSettings.jsx';
function Setting() {
  return (
    <DashbordWrapper>
        <div className="flex-center" style={{height:'80vh',width:'100%'}}>
             <div className="settings">
                 <UserProfile/>  <AdminSettings/>
             </div>
        </div>
    </DashbordWrapper>
  )
}

export default Setting
