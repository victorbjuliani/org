import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../styles.css";

const CustomExpandButton = (node) => {
  return (
    <>
      {node && (
        <div className="expand-btn">
          <span>{node.data._directSubordinates}</span>
          <span>{node.children ? <FaAngleLeft /> : <FaAngleRight />}</span>
        </div>
      )}
    </>
  );
};

export default CustomExpandButton;
