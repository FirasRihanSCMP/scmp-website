import React from 'react'

import stylesDepartment from "./department.module.css";
import Paragraph from '../paragraph'
export default function seperateDep(props) {
    return (
        <div >
        <h1 className={stylesDepartment.depTitle}>
          {props.dir}
        </h1>
        <Paragraph order={"first"} title={props.title} text={props.text} img={props.img1} />
        <Paragraph order={"last"} title={props.title2} text={props.text2} img={props.img2} />
   
      </div> 
    )
}
