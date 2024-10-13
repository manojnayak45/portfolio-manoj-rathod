import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,  // Import the email icon
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Rathod Manoj Kumar</span> and I'm from <span className="yellow"> Hyderabad, Telangana</span>
              <br />
              <br />
              I am currently pursuing a bachelor's degree in Electronics and Communication Engineering
              <br />
              <br />
              As a <b className="yellow"> Full-Stack </b> developer, I enjoy tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in
              <b className="yellow"> Javascript, </b>
              as well as have knowledge in programming languages such as C/C++.
              <br />
              <br />
              I have a passion for working with <b className="yellow">Node.js, MongoDB,</b> and
              <i>
                <b className="yellow"> modern Javascript libraries and frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i>
              <br />
              <br />
              I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/manojnayak45"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rathod-manoj-kumar-3a683a226/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/manoj_1818181818/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:iammanojnayak6@gmail.com" 
                  className="icon-colour home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
