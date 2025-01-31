import React from "react";
import "./PropertyRequest.css";
import { propertyRequest } from "../../../source";
import { FaDownLong } from "react-icons/fa6";

function PropertyRequest() {
  return (
    <div className="property-request">
      <div className="top">
        <h4>Request</h4>
        <div className="divider">
          <table>
            <thead>
              <tr >
                <th>Address</th>
                <th className="m-hide">Date</th>
                <th>Status</th>
                <th className="m-hide">Files</th>
              </tr>
            </thead>
            <tbody>
              {propertyRequest.map((Request, index) => (
                <tr key={index} className="tows">
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

export default PropertyRequest;
