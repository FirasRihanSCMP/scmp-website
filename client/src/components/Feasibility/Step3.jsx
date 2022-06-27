import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import StylesForm from "./Feasibility.module.css"
import Switch from "react-switch";

export default function Step3({formData, setFormData, data}) {
  const [results, setResults] = useState({})
  const [isLoaded,setIsLoaded]=useState(false)
  
   useEffect(() => {

  /*   console.log(JSON.parse(data[0].type)) */
    const filtering=  (arr)=>{
      setResults(arr.filter(function (el) { return el.StepN === 3 }));
      setIsLoaded(true)
      console.log(results);
    }
  filtering(data)

  }, [data]) 

  return (
    <div > <label className={StylesForm.title}> المنتج او الخدمة</label>
  <br/>
  {isLoaded ? results? results.map((val) => {
        return<Row key={val.id} className={StylesForm.back}>
        <Col sm={12} md={4} >   <label className={StylesForm.rowTitle}>{val.RowText}</label>
        </Col>

        <Col>{
        }
          {val.type ? JSON.parse(val.type).map((res) => {
            return <Row key={res.id}>
              <Col> <label className={StylesForm.rowTitle}>{res.text}</label> </Col>
              <Col className={StylesForm.Grade}>  {/*   <Switch onChange={(c) => { setFormData({ ...formData, step3: { ...formData.step3, [res.id]: { ...formData.step3[res.id], ch: c } } }) }} checked={formData.step3[res.id].ch} /> */}
                <input type="number" className={StylesForm.inputGrade} size={1}  onChange={(c) => { setFormData({ ...formData, step3: { ...formData.step3, [res.id]: { ...formData.step3[res.id], g: c.target.value } } }) }} value={formData.step3[res.id].g} id="" />
                <span>&nbsp;&nbsp;/ &nbsp;{res.g}</span>
              </Col>
            </Row>
          }) : <span></span>}
        </Col>
      </Row>
      }) : <p></p>: <div></div> }


    </div>
  )
}
