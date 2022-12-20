import * as React from "react";
import styles from './OrganigramaMxWebPart.module.scss';

//props.data.imageUrl
const CustomNodeContent = (props: any) => {

  //console.log(props.data.imageUrl);

  return (
    <>
      <div className={styles["node-container"]}>
        <div className={styles["node-details"]}>
          <div className={styles["node-content"]}>
          <img className={styles["node-img"]} src={require('../assets/users/' + props.data.imageUrl)} alt="Profile" />
            <div className={styles["node-info"]}>
              <div className={styles["node-name"]}>{props.data.name.toUpperCase()}</div>
              <div className={styles["node-role"]}>{props.data.positionName.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNodeContent;