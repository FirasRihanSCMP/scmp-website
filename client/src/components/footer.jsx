import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import stylesFooter from "./footer.module.css";
export default function Footer() {
  return (
    <div className={stylesFooter.rootFooter}>
      <Container className={stylesFooter.mainCont}>
        <Row>
          <Col
            xs={12}
            sm={12}
            lg={4}
            className={[stylesFooter.footerCols, stylesFooter.firstCol]}
          >
            <Col className={stylesFooter.bottomLogo} sm={6}>
              <img
                className={stylesFooter.logo}
                src="./scmpfinalfooter.png"
              
                alt="The Scientific Center For Manufactring And Production"
              /> </Col>
             <Col sm={6} className={stylesFooter.bottomTitle} >   <p className={stylesFooter.scmpfooter}>SCMP</p></Col>
           
          </Col>

          <Col
            xs={6}
            sm={4}
            lg={2}
            className={[stylesFooter.footerCols, stylesFooter.col2]}
          >
           {/*  <p>GET IN TOUCH</p> */}
            <p className={stylesFooter.yellowP}>LINKS</p>

            <div className={stylesFooter.LinksFooter}>
              <Link className={stylesFooter.LinksFooter} to="/">Home</Link>
              <Link className={stylesFooter.LinksFooter} to="/Departments">Departments</Link>
            <Link className={stylesFooter.LinksFooter} to="/Auth">Webmail</Link>
              <Link className={stylesFooter.LinksFooter} to="/Events">Events</Link> 
            </div>
          </Col>

          <Col
            xs={6}
            sm={4}
            lg={4}
            className={[stylesFooter.footerCols, stylesFooter.col3]}
          >
            <p className={stylesFooter.yellowP}>LOCATION</p>
            <div className={stylesFooter.infoFooter}>
              <p>Gardenia Building, Safarat Street</p>
              <p>Beirut Lebanon</p>
              <p className={stylesFooter.yellowP}>RESOURCES</p>
             <p>Phone: +961 1 822041</p> 

              <p>Mail : info@scmp-lb.com</p>
              <p>
                Icons by{" "}
                <a className={stylesFooter.yellowP} href="https://icons8.com">
                  Icons8
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
