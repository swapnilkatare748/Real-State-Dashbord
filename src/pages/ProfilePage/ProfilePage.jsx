import React from 'react'
import DashbordWrapper from '../../Components/DashBordWrapper/index';
import UserProfile from '../../Components/Pro/UserProfile';
import './ProfilePage.css';

function ProfilePage() {
  return (
     <DashbordWrapper>
       <div  style={{height:'80vh'}}>
          <div className="userprofiles">
          <UserProfile/>
          </div>
       </div>
     </DashbordWrapper>
  )
}

export default ProfilePage
