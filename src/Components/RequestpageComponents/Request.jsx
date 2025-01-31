import React, { useState } from "react";
import "./Request.css";
import { propertyRequest } from "../../source";
import { FaDownLong } from "react-icons/fa6";

function Request() {

  const [propertyReq,setPropertyReq] = useState(propertyRequest);

  // handle request logic
  const handleAccept = (id) => {
    const acceptFilteredRequests = propertyReq.filter((Request) => Request.id !== id);
    setPropertyReq(acceptFilteredRequests);
    window.alert("Request has been accepted:", id);
  };

  // delete request logic 
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      const filteredRequests = propertyReq.filter((Request) => Request.id !== id);
      setPropertyReq(filteredRequests);
      console.log("Request has been deleted:", id);
    }
  };
  
  return (
    <div className="property-request1">
      <div className="top">
        <br />
        <div className="divider">
          <table>
            <thead>
              <tr >
                <th>Address</th>
                <th className="m-hide">Date</th>
                <th>Status</th>
                <th>Request</th>
                <th>Delete</th>
                <th className="m-hide">Files</th>
              </tr>
            </thead>
            <tbody>
              {propertyReq.map((Request, index) => (
                <tr key={Request.id || index} className="tows">
                  <td>{Request.customerAddress}</td>
                  <td className="m-hide">
                    {Request.purchaseDate
                      ? new Date(Request.purchaseDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td>
                    <div className="flex-center request-status">
                      <span
                        className="dot"
                        style={{
                          background:
                            Request.status === 0
                              ? "var(--color-danger)"
                              : Request.status === 1
                              ? "var(--color-success)"
                              : "var(--color-warning)",
                        }}
                      />
                      <small>
                        {Request.status === 0
                          ? "Cancelled"
                          : Request.status === 1
                          ? "Done"
                          : "Processing"}
                      </small>
                    </div>
                  </td>
                  <td>
                    <button className="Acceptbtn"
                    onClick={()=>handleAccept(Request.id)}
                    
                    >Accept</button>
                  </td>
                  <td>
                    <button className="btn_delet"onClick={()=> handleDelete(Request.id)} >  Delete <i class="fa-solid fa-trash"></i> </button>
                  </td>
                  <td className="m-hide">
                    <div className="flex-center zip btn download-btn">
                      images.zip <FaDownLong />
                    </div>
                  </td>
                
                </tr>
              ))}
            </tbody> 
          </table>
        </div>
      </div>
    </div>
  );
}

export default Request;
