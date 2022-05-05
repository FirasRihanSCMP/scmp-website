import React from "react";
import { Row, Col,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import stylesFirst from "./firstcards.module.css";
import DepartmentCard from "./departmentCard";
import { Link } from "react-router-dom";
export default function Firstcards(props) {
  
  



  return (
    <div className={stylesFirst.bodyWidth}>
     {/*  <p className="departmentsTitle">Our Directorates</p> */}
      <Row className={`g-4 ${stylesFirst.cardsMiddleContainer}`}>
        <Col className={stylesFirst.cardCol} xs={12} sm={12} md={6} lg={6} xxl={4}>
          <DepartmentCard title={props.title[0]} text={props.text[0]} text2={props.text[0]} src={props.src[0]} img={props.img[0]} />
        </Col>

        <Col className={stylesFirst.cardCol} xs={12} sm={12} md={6} lg={6} xxl={4}>
          <DepartmentCard title={props.title[1]} text={props.text[1]} text2={props.text[1]}  src={props.src[1]} img={props.img[1]} />
        </Col>
        <Col className={stylesFirst.cardCol} xs={12} sm={12} md={6} lg={6} xxl={4}>
          <DepartmentCard title={props.title[2]} text={props.text[2]} text2={props.text[2]}  src={props.src[2]} img={props.img[2]} />
        </Col>
       

      
      </Row>
      <Row className={stylesFirst.buttonRow}> <Col className={stylesFirst.buttonCol}> <Link to="/Departments"> <Button variant="outline-warning">See More</Button></Link></Col></Row>
    </div>
  );
}
