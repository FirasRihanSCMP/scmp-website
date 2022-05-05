import React from 'react'
import stylesDepartment from "./department.module.css";
import Paragraph from '../paragraph'
export default function seperateDep2(props) {
    return (
     
        <div >
        <h1 className={stylesDepartment.depTitle}>
       {props.dir} Department
        </h1>
        <Paragraph order={"first"}  text={props.text} img={props.img} />

      </div> 
      
    )
}
