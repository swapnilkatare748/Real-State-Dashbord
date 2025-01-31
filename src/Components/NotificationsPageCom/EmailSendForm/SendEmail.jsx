import React, { useState } from "react";
import styles from "./SendEmail.module.css";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoMdSend } from "react-icons/io";


function SendEmail() {
  const [FormData, SetFormData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    SetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
  
      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    }
  };
  


  return (
    <div className={styles.SendEmailForm}>
      <h3> <MdMarkEmailUnread size={25}/>   SendEmail </h3>
      <input
        type="email"
        name="to"
        className={styles.SendEmailinput}
        placeholder=" To Email"
        onChange={handlechange}
        value={FormData.to}
      />
      <input
        type="text"
        name="subject"
        className={styles.SendEmailinput}
        placeholder="Subject"
        onChange={handlechange}
        value={FormData.subject}
      />
      <textarea
        name="text"
        className={styles.textArea}
        onChange={handlechange}
        value={FormData.text}
        placeholder="Message"
      ></textarea>
      <button onClick={handleSubmit} className={styles.SubmitBtton}>
        {" "}
        Send Mail{" "} <IoMdSend/>
      </button>
    </div>
  );
}

export default SendEmail;
