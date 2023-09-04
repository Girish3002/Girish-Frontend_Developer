import React from "react";
import "./DataItem.scss";
function DataItem({ item, onClick }) {
  return (
    <div className="datagrid" onClick={() => onClick(item)}>
      <div className="capsule-serial">Serial: {item.capsule_serial}</div>
      <div className="launch">Status: {item.status}</div>
      <div className="launch">Type: {item.type}</div>
      <div className="details">Landings: {item.landings}</div>
    </div>
  );
}

export default DataItem;
