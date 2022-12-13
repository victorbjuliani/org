import * as React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from './OrganigramaMxWebPart.module.scss';

const CustomExpandButton = (node: any) => {
  return (
    <>
      {node && (
        <div className={styles["expand-btn"]}>
          <span>{node.data._directSubordinates}</span>
          <span>{node.children ? <FaAngleLeft /> : <FaAngleRight />}</span>
        </div>
      )}
    </>
  );
};

export default CustomExpandButton;
