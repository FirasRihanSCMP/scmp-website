import React from "react";
import { Col, Row } from "react-bootstrap";
import DepartmentCard from "./departmentCard";
import stylesDepPage from "./Departments.module.css";
export default function Departments() {
  return (
    <Row className={`g-4 ${stylesDepPage.root}`}>
      <Col xs={6} sm={4}>
        <DepartmentCard className={stylesDepPage.Col}  img={"img3.jpg"} />
      </Col>
      <Col xs={6} sm={4}>
        <DepartmentCard className={stylesDepPage.Col}  img={"img3.jpg"} />
      </Col>
      <Col xs={6} sm={4}>
        <DepartmentCard  className={stylesDepPage.Col} img={"img3.jpg"} />
      </Col>
      <Col xs={6} sm={4}>
        <DepartmentCard  className={stylesDepPage.Col} img={"img3.jpg"} />
      </Col>
      <Col xs={6} sm={4}>
        <DepartmentCard  className={stylesDepPage.Col} img={"img3.jpg"} />
      </Col>
      <Col xs={6} sm={4}>
        <DepartmentCard  className={stylesDepPage.Col} img={"img3.jpg"} />
      </Col>
    </Row>
  );
}
