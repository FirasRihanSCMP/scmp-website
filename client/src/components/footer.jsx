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
                src="../../scmp-logo.svg"

                alt="The Scientific Center For Manufactring And Production"
              /> </Col>
            <Col sm={6} className={stylesFooter.bottomTitle} >   <p className={stylesFooter.scmpfooter}>SCMP</p></Col>


          </Col>

          <Col
            xs={6}
            sm={4}
            lg={4}
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
           <p className={stylesFooter.yellowP}>RESOURCES</p>
              <p>Phone: +961 1 822041</p>
              <p>Mail : info@scmp-lb.com</p>
              <p className={stylesFooter.itSupport}>IT Support : IT.support@scmp-lb.com</p>

              <div className={stylesFooter.socialMediaDiv}>

                <a className={stylesFooter.socialMedia} href="https://www.facebook.com/Scientific-Center-for-Manufacturing-and-Production-113151194718644/">
                  <svg fill="#ffc41d" xmlns="http://www.w3.org/2000/svg" id={stylesFooter.facebook} viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" /></svg></a>
                <a className={stylesFooter.socialMedia} href="https://www.instagram.com/scmplb/">

                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" id={stylesFooter.instagram} viewBox="0 0 24 24" width="24px" height="24px">
                    <defs>
                      <linearGradient id="InstagramGradient" x1="0%" y1="100%" x2="30%" y2="0%">
                        <stop offset="0%" stopColor="#feda75" />
                        <stop offset="25%" stopColor="#fa7e1e" />
                        <stop offset="60%" stopColor="#C13584" />
                        <stop offset="75%" stopColor="#833AB4" />
                        <stop offset="95%" stopColor="#5851D8" />
                      </linearGradient>
                    </defs>
                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" /></svg></a>
                <a className={stylesFooter.socialMedia} href="https://www.youtube.com/channel/UCsuOLHb18czf2YLYIoQv8LQ"> <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" id={stylesFooter.youtube} viewBox="0 0 50 50" width="50px" height="50px"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" /></svg></a>

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
              <p>Beirut, Bir Hassan</p>
              <p>Next to the Kuwaiti Embassy</p>
              <p>Gardenia Building, 4th Floor</p>
              <br/>
              <iframe title="SCMP Location" id={stylesFooter.gmap_canvas} src="https://maps.google.com/maps?q=scientific%20center%20for%20manufacturing%20and%20production&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

              {/*    <p>
                Icons by 
                <a className={stylesFooter.yellowP} href="https://icons8.com">
                  Icons8
                </a>
              </p> */}
            </div>
          </Col>
        </Row>
        <Row> <p className={stylesFooter.copyrights}>© 2021-2022 All Rights Reserved</p></Row>
      </Container>
    </div>
  );
}
