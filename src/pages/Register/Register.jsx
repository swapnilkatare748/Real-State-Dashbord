import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate, Link } from "react-router-dom";
import { SiBuildkite } from "react-icons/si";


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role : "User",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }try{
        const response = await fetch('http://localhost:3000/api/users/register',{
          method :'POST',
          headers : {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name : formData.username,
            email : formData.email,
            password : formData.password,
            role: formData.role, 
          }),
        }
        );

        const result = await response.json();

        if(response.ok){
          alert("Register sucessFull");
          // alert(result.message);
          navigate("/login");
          //redirect to login page or other actions 
        }else{
          alert(`Error : ${result.message}`)
        }
      }catch(error){
        console.error(`Error during registration:`, error);
        alert('An error occurred. Please try again later.');
      }
   

    }

  return (
    <div className={styles.registerContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.inputGroupheading}>
          <SiBuildkite className={styles.icons} />
          <span>
            Dev<span className="gradient-text">Cave</span>
          </span>
        </div>


        <h2 className={styles.heading}>Register</h2>

    {/* role  */}
          <div className={styles.role}>
                   <label>
                     <input
                       type="radio"
                       name="role"
                       value="Admin"
                       checked={formData.role === "Admin"}
                       onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                     />
                     Admin
                   </label>
                   <label>
                     <input
                       type="radio"
                       name="role"
                       value="User"
                       checked={formData.role === "User"}
                       onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                     />
                     User
                   </label>
           </div>


        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={styles.input}
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className={styles.registerButton}>
          Register
        </button>
           <div className={styles.inputGroup}>
                           <br />       
                           <p> <Link to='/login'> Login </Link></p>
                           <p><Link to='/'> Accept terms and conditions </Link></p>
           </div>
      </form>
    </div>
  );
};

export default Register;
