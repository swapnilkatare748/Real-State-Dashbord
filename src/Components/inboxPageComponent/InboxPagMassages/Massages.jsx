import React, { useEffect, useState } from "react";
import styles from "./Massages.module.css";
// import { messages } from "../../../source";
import { MdDelete } from "react-icons/md";

function Messages() {
  const [Messages, setMessages] = useState([]);
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/message/");
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.error("failed to fetch Message", response.statusText);
        }
      } catch {
        console.error("Error fetching message : ", error);
      }
    };
    fetchMessage();
  }, []);

  const handleView = (id) => {
    setSelectedMessageId((prevId) => (prevId === id ? null : id));
  };

  const handleDelete = async (id) => {
    // Filter out the message with the given ID
    try {
      const response = await fetch(
        `http://localhost:3000/api/message/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Message deleted successfully. ID:", id);
        setMessages((prevMessages) =>
          prevMessages.filter((message) => message._id !== id)
        );
      } else {
        console.error("Failed to delete message:", response.statusText);
      }
    } catch(error) {
            alert("error to deleting the message ",error);
    }
    // const updatedMessages = Messages.filter((message) => message.id !== id);
    // console.log("Message is deleted. ID:", id);
    // setMessages(updatedMessages);
  };

 

  return (
    <div className={styles.Massages}>
      <table>
        <thead>
          <tr>
            <td>Sr</td>
            <td>Name</td>
            <td>Email</td>
            <td>Time</td>
            <td>Message</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {Messages && Messages.length > 0 ? (
            Messages.map((message, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.createdAt}</td>
                  <td>
                    <button
                      className={styles.viewbutton}
                      onClick={() => handleView(message._id)}
                    >
                      View Message
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.deletebutton}
                      onClick={() => handleDelete(message._id)}
                    >
                      <MdDelete /> Delete
                    </button>
                  </td>
                </tr>
                {selectedMessageId === message._id && (
                  <tr
                    className={`${styles.descriptionRow} ${
                      selectedMessageId === message._id
                        ? styles.showDescription
                        : " "
                    }`}
                  >
                    <td colSpan="6" className={styles.messageDescription}>
                      <div>Discription : {message.message}</div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <h4>No data found</h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Messages;
