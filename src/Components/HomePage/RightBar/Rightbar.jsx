import React, { useState, useEffect } from 'react';
import './Rightbar.css'; 
import { properties } from '../../../source';
import axios from 'axios';
import userimg from '../../../assets/User_defolt.webp';

function Rightbar() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Include token if necessary
        const response = await axios.get("http://localhost:3000/api/users/", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token if your backend requires authentication
          },
        });
        setAgents(response.data); // Update the state with users' data
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="right-bar-container">
      <div className="top-agents-container">
        <h4>Top Agent</h4>
        {
          agents.map((agent, index) => {
            return ( // Add return here for each agent JSX
              <div className='flex agent-card' key={index}> 
                <div className='profile'>
                  <img src={agent.photo || userimg } alt={agent.name} /> {/* Added alt for better accessibility */}
                </div>
                <div className="details">
                  <h3 className='name'>{agent.name}</h3>
                  <p className='muted'>{agent.role}</p>
                </div>
              </div>
            );
          })
        }
      </div>

      <div className="divider">
        <h4>Top Sales</h4>
        {
          properties.map((property, index) => {
            return ( // Add return here for each property JSX
              <div className="flex property-card" key={index}>
                <div className="picture">
                  <img src={property.image} alt={property.title} />
                </div>
                <div className="details">
                  <h3 className="title clamp-1">{property.title}</h3>
                  <p className='muted address clamp-1'>{property.location}</p>
                </div>
                <h3 className='price'>{property.price}</h3>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Rightbar;
