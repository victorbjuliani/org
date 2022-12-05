import React from "react";
import "../styles.css";

const CustomNodeContent = (props) => {
  return (
    <>
      <div className="node-container">
        <div className="node-details">
          <div className="node-content">
            <img className="node-img" src={props.data.imageUrl} alt="Profile" />
            <div className="node-info">
              <div className="node-name">{props.data.name}</div>
              <div className="node-role">{props.data.positionName}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNodeContent;
