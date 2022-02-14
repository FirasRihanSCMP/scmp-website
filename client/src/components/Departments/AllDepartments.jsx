import React from 'react'
import { Col, Row } from "react-bootstrap";
import DepartmentCard from "../departmentCard";
import stylesDepPage from "./Departments.module.css";
export default function AllDepartments() {
    return (
        <div>
             <p className={stylesDepPage.departmentsTitle}>Our Departments</p>
          <Row className={`g-4 ${stylesDepPage.root}`}>
       <Col xs={12} sm={6} lg={4}>
        <DepartmentCard title={"Studies"}  src={"Studies"} text={"The Directorate collects reliable data and do all the needed studies related to productive and industrial projects. "} text2={"The Directorate collects precise data and do all the needed studies related to productive and industrial projects. "}   className={stylesDepPage.Col} img={"lukas.jpg"} />
      </Col>
      <Col xs={12} sm={6} lg={4}>
        <DepartmentCard title={"Energy and Water"} src={"Energy"} text2={"We offer innovative and sustainable solutions for the production and consumption of energy and usage of water."} text={"We offer innovative and sustainable solutions for the production and consumption of energy and usage of water."}  className={stylesDepPage.Col}  img={"energycover.jpg"} />
      </Col>
      <Col xs={12} sm={6} lg={4}>
        <DepartmentCard title={"Food Industry"} src={"Food"} text={"Our vision in the Food Industry department is to be a leading provider of services, researchs and consultancies on agri-food sector."} text2={"Our vision in the Food Industry department is to be a leading provider of services, researchs and consultancies on agri-food sector."}   className={stylesDepPage.Col} img={"photo1.jpg"} />
      </Col>
      <Col xs={12} sm={6} lg={4}>
      <DepartmentCard title={"Technology Broker"} src={"Technology"} text={"We use our knowledge, skills, and resources to increase the productive capacity of the economy."} text2={"We use our knowledge, skills, and resources to increase the productive capacity of the economy."} className={stylesDepPage.Col}  img={"techcover.jpg"} />
      </Col>
      <Col xs={12} sm={6} lg={4}>
        <DepartmentCard title={"Accelerator"}  src={"Accelerator"} text={"Accelerating your ideas towards a successful company is our main aim."} text2={"Accelerating your ideas towards a successful company is our main aim."}   className={stylesDepPage.Col} img={"rocket.jpg"} />
      </Col>
      <Col xs={12} sm={6} lg={4}>
        <DepartmentCard title={"Venture Capital"}  src={"Venture"} text={"Expanding small businesses into bigger ones."} text2={"Expanding small businesses into bigger ones."}   className={stylesDepPage.Col} img={"venture (2).jpg"} />
      </Col>
      
      {/* <Col xs={12} sm={6} lg={4}>
        <DepartmentCard title={""} text={""} text2={""}   className={stylesDepPage.Col} img={"img3.jpg"} />
      </Col> */}
    </Row>  
        </div>
    )
}
