import React,{useEffect} from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import StylesForm from "./Feasibility.module.css"
import Switch from "react-switch";
import Circle from 'react-circle';
export default function Step22({FinalGrade}) {

useEffect(() => {
console.log(FinalGrade)
}, [])

  return (
    <div className={StylesForm.toTheRight}> <label className={StylesForm.title}>النتيجة</label>    
        <br/>
 
        <Circle className={StylesForm.FinalGrade}
  animate={true} // Boolean: Animated/Static progress
  animationDuration="5s" //String: Length of animation
  size={350} // Number: Defines the size of the circle.
  progress={FinalGrade}
  showPercentageSymbol={false}
/>

    </div>
  )
}
