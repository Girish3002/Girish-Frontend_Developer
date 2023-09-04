// Capsuledata.js
import React from "react";
import "./Capsuledata.scss";
import { AiOutlineClose } from "react-icons/ai";

function Capsuledata({ item, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };
  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="details-container">
        <div className="close-button-container">
          <button className="close-button" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <h2 className="capsule-title">
          Capsule Serial :{" "}
          <span className="capsule-description">{item.capsule_serial}</span>
        </h2>
        <div className="capsule-title">
          Status: <span className="capsule-description"> {item.status}</span>
        </div>
        <div className="capsule-title">
          Launch Date:{" "}
          <span className="capsule-description">
            {" "}
            {new Date(item.original_launch).toISOString().split("T")[0]}
          </span>
        </div>
        <div className="capsule-title">
          Type:<span className="capsule-description"> {item.type}</span>
        </div>
        <div className="capsule-title">
          Landings:{" "}
          <span className="capsule-description"> {item.landings}</span>
        </div>
        <div className="capsule-title">
          ID: <span className="capsule-description"> {item.capsule_id}</span>
        </div>
        <div className="capsule-title">
          Details: <span className="capsule-description"> {item.details}</span>
        </div>
      </div>
    </div>
  );
}

export default Capsuledata;
