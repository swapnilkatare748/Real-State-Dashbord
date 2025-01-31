import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BiMessageSquare, BiMessageSquareDetail, BiPlus } from 'react-icons/bi';
import { IoNotificationsCircleOutline, IoSearch } from 'react-icons/io5'
import { LuSettings } from 'react-icons/lu';
import { SiBuildkite } from 'react-icons/si'
import { TiThMenu } from 'react-icons/ti';
import { navTabs } from '../../source';
import { TbAB } from 'react-icons/tb';
import './Navbar.css';
import { Link,useLocation } from 'react-router-dom';
function Navbar({onMenuClick}) {
const [searchInputForce,setSerchInputForce] = useState(false);
const {pathname} = useLocation();
const Navigation = useNavigate();
const userTypeRoute = window.localStorage.getItem("userRole");

console.log(searchInputForce);
  return (


   <nav className='navbar'>
       <div className="flex nav-row">
        <div className="flex-center icon-wrapper logo">
            <SiBuildkite/>
        </div>
        <div className="flex column">
            <div className={`flex-center search-container ${searchInputForce ? 'active':''}`}>
                <IoSearch className='icon'/>
                 <input type="text"
                 placeholder='Search iteam...'
                 onFocus={()=>setSerchInputForce(!searchInputForce)}
                 onBlur={()=>setSerchInputForce(!searchInputForce)}
                 />
             </div>
          <div className="flex-center icon-wrapper icon-btn">
            <LuSettings/>
          </div>

        </div>
        <div className="flex column">
        <div className="flex-center icon-wrapper icon-btn">
            <BiMessageSquareDetail />
        </div>
        <div className="flex-center icon-wrapper icon-btn">
            <IoNotificationsCircleOutline/>
        </div>
        <div className="flex-center icon-wrapper icon-btn">
            <IoNotificationsCircleOutline/>
        </div>
        <div className="flex-center btn primarry add-btn" onClick={()=>{Navigation(`/${userTypeRoute}/add-property`)}}>
            <BiPlus/>
            Add property
        </div>
        <div className="flex-center menu-button" onClick={onMenuClick}>
          <TiThMenu/>
        </div>

        </div>
       </div>
       <div className="flex nav-row">
        <div className="column .flex tabs-container">
            {
                 navTabs.map((tab,index)=>{
                    const updatedRoute = userTypeRoute ? `/${userTypeRoute}/${tab.route}` : tab.route;
                    return (
                        <Link 
                        to={updatedRoute}
                        className={`tab${tab.activeRoutes.includes(pathname)?'active gridient-text' : ''}`}
                        key={index}>
                            {tab.name}
                        </Link>
                    )
                } )
                }                
        </div>
        <div className="column">

        </div>
       </div>
      
    </nav>
  )
}

export default Navbar
