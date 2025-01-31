import React, { useState } from "react";
import styles from "./AdmineSettings.module.css";
import ThemeToggel from '../../ThemeToggle/ThemeToggel.jsx';

function AdminSettings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [userRole, setUserRole] = useState("Admin");

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
    alert(`Dark Mode ${!isDarkMode ? "Enabled" : "Disabled"}`);
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled((prev) => !prev);
    alert(`Notifications ${!notificationsEnabled ? "Enabled" : "Disabled"}`);
  };

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
    alert(`User Role changed to ${e.target.value}`);
  };

  const handleLanguageChange = (e) => {
    setUserRole(e.target.value);
    alert(`User Role changed to ${e.target.value}`);
  };

  return (
    <div className={styles.adminSettings}>
      <h2>Admin Panel Settings</h2>

      {/* Dark Mode Setting */}
      <div className={styles.settingItem}>
        <label>Dark Mode</label>
        <ThemeToggel/>
      </div>

      {/* Notifications Setting */}
      <div className={styles.settingItem}>
        <label>Enable Notifications</label>
        <button onClick={handleNotificationsToggle}>
          {notificationsEnabled ? "Disable" : "Enable"}
        </button>
      </div>

      {/* User Role Management */}
      <div className={styles.settingItem}>
        <label>Change User Role</label>
        <select value={userRole} onChange={handleRoleChange}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>
      
      {/* language */}
  
      <div className={styles.settingItem}>
        <label>Language</label>
        <select value={userRole} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
        </select>
      </div>
      


    </div>
  );
}

export default AdminSettings;
