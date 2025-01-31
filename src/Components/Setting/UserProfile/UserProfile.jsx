import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { AddminProfile } from "../../../source";
import EditProfile from "../EditProfile/EditProfile";
import { IoIosLogOut } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import userimage from '../../../assets/User_defolt.webp';




function UserProfile() {

  const navigate = useNavigate(); // Corrected initialization of the useNavigate hook
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(AddminProfile); // Fixed naming convention
  const [loding,setLoading] = useState(true);
  const [error,setError] = useState();


  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const id = localStorage.getItem('_id');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Use `getItem`, not `setItem`
        if (!token) {
          navigate("/login");
          return;
        }
  
        const response = await axios.get(`http://localhost:3000/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user data");
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id, navigate]); // Dependency array ensures it only runs when `id` or `navigate` changes
  
    

  const handleSave = (updatedData) => {
    setUserData(updatedData); // Update state with new data
    setIsEditing(false);
    alert("Profile data has been updated");
    console.log("Updated user data: ", updatedData);
  };

  
  return (
    <>
      {isEditing ? (
        <EditProfile
          userData={userData}
          onSave={handleSave}
          onCancle={handleCancel}
        />
      ) : (
        <div className={styles.UserProfile}>
          <div className={`${styles.section} flex-center`}>
            <div className={styles.profilePhotodiv}>
              <img
             src={userData?.photo || userimage}
             className={styles.profilePhoto}
                alt="User Profile"
              />
            </div>
          </div>
          <div className={styles.section}>
            <h4>{userData.name}</h4>
            <p>{userData.email}</p>
            <p>{userData.role}</p>
          </div>

          <div className={styles.section2}>
            <p>{userData.description || "No description available."}</p>
          </div>

          <div className={styles.buttons}>
            <div className={styles.buttons2}>
              <button className={styles.btn_Edit} onClick={handleEdit}>
                <span>
                  <FaUserEdit />
                </span>{" "}
                Edit Profile
              </button>

              <button className={styles.btn_cp}>forgat Password</button>
            </div>
            <button
              className={`${styles.logout} btn`}
              onClick={() => navigate("/")}
            >
              Logout <IoIosLogOut size={13} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
