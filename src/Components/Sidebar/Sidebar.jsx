import React from 'react';
import './Sidebar.css';
import { SiBuildkite } from 'react-icons/si';
// import { FaArrowRightLong } from 'react-icons/fa';
import { sidebar } from '../../source.jsx';
import { Link, useLocation } from 'react-router-dom';
import { profile7 } from '../../assets/images/index.jsx';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import  ThemeToggle from '../ThemeToggle/ThemeToggel.jsx';
const userTypeRoute = window.localStorage.getItem("userRole");

const name  = localStorage.getItem("userName");

console.log("userType : ",userTypeRoute);

function Sidebar({
     show,
     onClose,
}) {
  const { pathname } = useLocation();

  return (
    <>
    {
      show ? (<div className='sidebar-overlay' onClick={onClose}/>):" "
    }
    <aside className={`flex sidebar ${show ? 'show':' '}`}>
      {/* Top Section */}
      <div className="flex-center top">
        <div className="flex-center logo">
          <div className="flex-center icon-wrapper">
            <SiBuildkite />
          </div>
          <span>
            Real<span className="gradient-text">Homes</span>
          </span>

        </div>
        <div className="flex-center icon-wrapper cancle-btn" onClick={onClose}>
          <FaTimes/>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle no-scrollbar">
        <div className="tab-container">
          {sidebar.map((list, index) => {
            const isActive = list.activeRoutes?.includes(pathname);
            const updatedRoute = userTypeRoute ? `/${userTypeRoute}/${list.route}` : list.route;
            return (
              <Link
              
                to={updatedRoute}
                className={`flex-center tab ${isActive ? 'active' : ''}`}
                key={index}
              >
                {list.icon}
                <span className={`name ${isActive ? 'gradient-text' : ''}`}>{list.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Divider Section */}
        <div className="divider"> 
          <div className="info-container">
            <div className="top">
              <h3>Explore Trending Program</h3>
              <div className="divider"></div>
              <div className="middle">
                <p className="description">
                  Discover a wide range of programs tailored for your needs. Stay updated with the latest trends and enhance your skills today!
                </p>
              </div>
              <div className="bottom">
                <button className=".flex-center btn">
                  Explore   <FaArrowRight/>
                </button>
              </div>
            </div>
          </div>
           
        
        </div>

    </div>
       {/* Bottom Section */}
       <div className="bottom ">
            <div className="flex-center user-container">
              <div className="profile">
                <img src={profile7} alt="User Profile" />
              </div>
              <div className="details">
                <h4>{name}</h4>
                <small className="muted clamp-1">Frontend Developer</small>
              </div>
              <div className='felx-center toggle-container'>
              <ThemeToggle/>
              </div>
            </div>
          </div>
    </aside>
    </>
  );
}

export default Sidebar;
