import React, { useState } from 'react'
import styles from './EditProfile.module.css';

function EditProfile({userData,onSave,onCancle}) {
    const[formData,setFormData] = useState(userData);
  const handleChange = (e)=>{
     const {name,value} = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name] : value,
    }));

  }
  const handleSave = ()=>{
    onSave(formData);
  }

  return (
    <div className={styles.editProfile}>
        <div className={styles.field}>
           <label htmlFor="name">Name :</label>

          
           <input type="text"
           name='name'
           value={formData.name}
           onChange={handleChange}
           /> 
        </div>
        <div className={styles.field}>
           <label htmlFor="">Email: </label>
            <input type="email" 
             name='Email'
             value={formData.Email}
             onChange={handleChange}
            />
        </div>
        <div className={styles.field}>
            <label htmlFor="">Position :  </label>
            <input type="text"
            name='position'
            value={formData.Position}
            onChange={handleChange}
            />
           
        </div>
        <div className={styles.field}>
            <label htmlFor=""className={styles.textArea} >Description</label>
            <textarea name="discription" id=""
            value={formData.description}
            onChange={handleChange}
        >  </textarea>
        </div>
        <div className={styles.actions}>
            <button onClick={handleSave} className={styles.savebtn}> Save </button>
             <button onClick={onCancle} className={styles.cancleButton}>Cancle</button>
        </div>
    </div>
  )
}

export default EditProfile
