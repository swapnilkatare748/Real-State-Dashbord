  import React, { useState } from 'react';
  import styles from './AddPropertyForm.module.css';
  import {properties} from '../../source';
  import axios from 'axios';

  const AddPropertyForm = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [property, setProperty] = useState({
      image: '',
      title: '',
      description: '',
      price: '',
      carpetArea: '',
      BHK: '',
      status: '',
      contact: '',
      location: '',
      categories:'',
    });

  // function to add new property 
  const addProperty = (newProperty) => {
    properties.push(newProperty); // Add new property to the array
    // If needed, save to localStorage as well
    localStorage.setItem('properties', JSON.stringify(properties));
  };


  // gate data from user 
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProperty({ ...property, [name]: value });
    };

    //image handler
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();

        // When the file is loaded, convert it to Base64 and store it in the state
        reader.onload = () => {
          const base64Image = reader.result;
          setImagePreview(base64Image); // Update the preview
          // Set the image in the property state
          setProperty({ ...property, image: base64Image });
        };

        reader.readAsDataURL(file); // Convert the file to a Base64 string
      }
    };

    const handleSubmit = async(e) => {
      e.preventDefault();
      
      try{
        const response = await axios.post("http://localhost:3000/api/property/create",property);
      
        if(response){
          alert("Property added sucess full");  
        }
      //Display sucess message 
        //clear the from after submission 
        setProperty({
          image: '',
          title: '',
          description: '',
          price: '',
          carpetArea: '',
          BHK: '',
          status: '',
          contact: '',
          location: '',
          categories:'',
        });
        setImagePreview(null);  //clear the image preview after submit 
      }catch(error){
        console.log("error adding property:",error);
        alert("failed to add property please try again");
      }
    };

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Add Property</h2>

        <label className={styles.label}>
          Title:
          <input
            className={styles.input}
            type="text"
            name="title"
            value={property.title}
            onChange={handleChange}
            placeholder="Enter Property Name"
            required
          />
        </label>

        {/* Image Upload Section */}
        <div className={styles.container}>
          <h2>Upload Images</h2>
          <div className={styles.image_container}>
          <input
            type="file"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleImageUpload}
          />
          <div>
          {imagePreview && (
            <div className={styles.previewContainer}>
              <h3>Image Preview:</h3>
              <img src={imagePreview} alt="Preview" className={styles.imagePreview} />
            </div>
          )}
          </div>
          </div>
        </div>

        <label className={styles.label}>
          Description:
          <textarea
            className={styles.textarea}
            name="description"
            value={property.description}
            onChange={handleChange}
            placeholder="Description"
            required
          ></textarea>
        </label>

        <label className={styles.label}>
          Price:
          <input
            className={styles.input}
            type="number"
            name="price"
            value={property.price}
            onChange={handleChange}
            placeholder="$90,500"
            required
          />
        </label>

        <label className={styles.label}>
          Carpet Area:
          <input
            className={styles.input}
            type="text"
            name="carpetArea"
            value={property.carpetArea}
            onChange={handleChange}
            placeholder="Enter carpet area"
            required
          />
        </label>

        <label className={styles.label}>
          BHK:
          <input
            className={styles.input}
            type="number"
            name="BHK"
            value={property.BHK}
            onChange={handleChange}
            placeholder="3"
            required
          />
        </label>

        <label className={styles.label}>
          Status:
          <select
            className={styles.select}
            name="status"
            value={property.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
          </select>
        </label>


        <label className={styles.label}>
          Property Type:
          <select
            className={styles.select}
            name="categories"
            value={property.categories}
            onChange={handleChange}
            required
          >
            <option value="House">House</option>
            <option value="Aprment">Aperment</option>
            <option value="Office">Office</option>
            <option value="TownHome">TownHome</option>

          </select>
        </label>


        <label className={styles.label}>
          Contact:
          <input
            className={styles.input}
            type="text"
            name="contact"
            value={property.contact}
            onChange={handleChange}
            placeholder="Enter contact details"
            required
          />
        </label>

        <label className={styles.label}>
          Location:
          <input
            className={styles.input}
            type="text"
            name="location"
            value={property.location}
            onChange={handleChange}
            placeholder="Lagos, Nigeria"
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    );
  };

  export default AddPropertyForm;
