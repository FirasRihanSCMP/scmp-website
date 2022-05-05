import React from 'react'
import stylesDepPage from "./Departments/Departments.module.css";
export default function topTitle(props) {
    return (
        <div>
                <p className={stylesDepPage.departmentsTitle}>{props.title}</p>
        </div>
    )
}
