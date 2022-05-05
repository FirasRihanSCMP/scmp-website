import React from 'react';
import styles from './spinner.module.css'
import ClipLoader from "react-spinners/ClipLoader";
export default function Spinner() {
  return <div className={styles.spinnerdiv}><ClipLoader color={"#ffc41d"} size={150} css={ " "}/> </div>;
}
