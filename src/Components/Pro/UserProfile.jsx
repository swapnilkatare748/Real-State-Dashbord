import React, { useState,useRef,useEffect} from "react";
// import { agents } from "../../source";
import styles from "./UserProfile.module.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import userimag from '../../assets/User_defolt.webp';
import axios from "axios";


function UserProfile() {
  const [activeUserId, setActiveUserId] = useState(null); // Track active user's ID
  const popupRef = useRef(null);
  const [agents,setAgent] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);



  const handleAction = (id) => {
     setActiveUserId((prevId)=>( prevId === id ? null : id ));
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActiveUserId(null);
      }
    };

    if (activeUserId !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeUserId]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Include token if necessary
        const response = await axios.get("http://localhost:3000/api/users/", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token if your backend requires authentication
          },
        });
        setAgent(response.data); // Update the state with users' data
        localStorage.setItem('usersData', JSON.stringify(response.data));

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

   
  // deleting the user 
  const handleDeleteUser = async (id) => {
    try {

      console.log("user if for delete ",id);
      const token = localStorage.getItem("authToken"); // Include token if necessary
      await axios.delete(`http://localhost:3000/api/users/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token if your backend requires authentication
        },
      });
  
      // Remove the deleted user from the agents array
      setAgent((prevAgents) => prevAgents.filter((agent) => agent.id !== id));
      setActiveUserId(null); // Close the popup
      alert("User deleted successfully");
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user");
    }
  };
  


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }



const handlePopupUserClick = () => {
  setActiveUserId(null); // Close popup when clicking inside divs in the popup
};

  return (
    <div className={styles.UserProfile}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Sr</td>
            <td>Profile</td>
            <td>Name</td>
            <td>Email</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {agents && agents.length > 0 ? (
            agents.map((agent, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="profile">
                    <img src={agent.profile || userimag } alt="img" />
                  </div>
                 </td>
                <td>{agent.name}</td>
                <td>{agent.email}</td>
                <td>{agent.role}</td>
                <td>
                  <button
                    className={styles.Treedot}
                    onClick={() => handleAction(agent._id)}
                  >
                   < HiOutlineDotsVertical/>
                  </button>
                </td>

                { activeUserId === agent._id &&(
                  <td className={styles.userPopup}>
                        <div value="Edit" className={styles.chDiv} onClick={()=>handlePopupUserClick()}>Edit</div>
                        <div value="Delete" className={styles.chDiv} onClick={()=>{
                          handleDeleteUser(agent._id);
                          handlePopupUserClick();
                        }}>Delete</div>
                        <div value="update" className={styles.chDiv} onClick={()=>handlePopupUserClick()}>Update</div>
                  </td>
                )
                    
                }
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No agents found.
              </td>
            </tr>
          )}

        </tbody>
      </table>
      {activeUserId === agents.id && ( // Check if this user is active
            <div className={styles.UserPro}>
              <h3>Edit</h3>
              <h3>Update</h3>
              <h3>Delete</h3>
            </div>
          )}   
    </div>
  );
}

export default UserProfile;
