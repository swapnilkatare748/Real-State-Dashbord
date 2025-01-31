import React, { useState } from "react";
import styles from './PropertyCard.module.css';

const PropertyCard = ({ propertyes, deleteProperty }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProperty, setEditedProperty] = useState({ ...propertyes });
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
   
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProperty({ ...editedProperty, [name]: value });
  };

  function showAlert(message) {
    let alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.right = "20px";
    alertBox.style.background = "red";
    alertBox.style.color = "white";
    alertBox.style.padding = "10px 20px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
    alertBox.style.fontSize = "16px";
    alertBox.style.zIndex = "1000";

    document.body.appendChild(alertBox);

    // Remove alert after 2 seconds
    setTimeout(() => {
        alertBox.remove();
    }, 2000);
}

// Example usage
showAlert("This alert will disappear in 2 seconds!");


  const handleSave = async () => {
    try {
      console.log("edit propery id ",editedProperty._id);
      const response = await fetch(`http://localhost:3000/api/property/update/${editedProperty._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedProperty),
      });
  
      if (!response.ok) {
        throw new alert("Failed to update property");
      }
      
      const data = await response.json();
      console.log("Updated Property:", data.updatedProperty);
      
      // Update the state to reflect changes
      setIsEditing(false);
    
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };
  

  return (
    <div className={styles.card}>
      <img
        src={editedProperty.image}
        alt={editedProperty.title}
        className={styles.image}
      />
      <div className={styles.content}>
        {isEditing ? (     
           <h3>
            Title : <input
            type="text"
            name="title"
            value={editedProperty.title}
            onChange={handleInputChange}
            className={styles.input}
          />
           </h3>
        ) : (
          <h3>{editedProperty.title}</h3>
        )}
        {isEditing ? (
          <p className={styles.discripton}>
            <strong>Description : </strong>
            <textarea
            placeholder= "Discription :"
            name="description"
            value={editedProperty.description}
            onChange={handleInputChange}
            className={styles.textarea}

          />   
          </p>
        ) : (
          <p>{editedProperty.description}</p>
        )}
        <p>
          <strong>Price:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              name="price"
              value={editedProperty.price}
              onChange={handleInputChange}
              className={styles.input}
            />
          ) : (
            editedProperty.price
          )}
        </p>
        <p>
          <strong>Carpet Area:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              name="carpet_area"
              value={editedProperty.carpet_area}
              onChange={handleInputChange}
              className={styles.input}
            />
          ) : (
            editedProperty.carpet_area
          )}
        </p>
        <div>
          <p>
            <strong>BHK:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="BHK"
                value={editedProperty.BHK}
                onChange={handleInputChange}
                className={styles.input}
              />
            ) : (
              editedProperty.BHK
            )}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="type"
                value={editedProperty.type}
                onChange={handleInputChange}
                className={styles.input}
              />
            ) : (
              editedProperty.status
            )}
          </p>
        </div>
        <div className={styles.bottomdiv}>
          <button className={styles.button}>
            <i className="fa-solid fa-phone"></i> Contact
          </button>
          <div className={styles.location}>
            <i className="fa-solid fa-location-dot"></i> {editedProperty.location}
          </div>
          {isEditing ? (
            <button className={styles.Edit} onClick={handleSave}>
              Save <i className="fa-regular fa-floppy-disk"></i>
            </button>
          ) : (
            <button className={styles.Edit} onClick={handleEditToggle}>
              Edit <i className="fa-regular fa-pen-to-square"></i>
            </button>
          )}
          <div
            className={styles.delet}
            onClick={() => deleteProperty(editedProperty._id)}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
