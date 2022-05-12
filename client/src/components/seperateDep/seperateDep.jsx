import React from 'react'
import stylesHome from "../Home/width.module.css"
import stylesDepartment from "./department.module.css";
import Paragraph from '../paragraph'
import { TabTitle } from '../../actions/GeneralFunctions';
export default function seperateDep(props) {
  TabTitle('Departments - Scientific Center For Manufacturing And Production')
    return (
        <div className={stylesHome.root}>
        <h1 className={stylesDepartment.depTitle}>
          {props.dir}
        </h1>
        <Paragraph order={"first"} title={props.title} text={props.text} img={props.img1} />
        <Paragraph order={"last"} title={props.title2} text={props.text2} img={props.img2} />
   
      </div> 
    )
}
