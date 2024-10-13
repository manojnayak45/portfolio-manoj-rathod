import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="EduNest"
              description="This project is an online e-learning platform built using the MERN stack, featuring React.js for the frontend, Node.js for the backend, and MongoDB for the database. As the name suggests, the platform focuses on e-learning, allowing students to enroll in courses and start learning. Administrators can add and manage courses they wish to sell.

The platform's main features include payment integration, enabling students to purchase courses seamlessly, and OTP verification during the registration process to ensure secure account creation."
              ghLink="https://github.com/manojnayak45/edutesting"
              demoLink="https://edunest-e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Care Connect"
              description="This project is a comprehensive hospital management system designed to streamline the process of booking appointments with doctors and managing healthcare services. It offers a range of functionalities for both users and administrators, enhancing the efficiency and organization of hospital operations.Overall, the Hospital Management System is designed to enhance the efficiency of hospital operations and improve the user experience by providing an easy-to-use platform for booking and managing appointments."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="StayEase(frontend)"
              description="As a React.js developer on the StayEase project, my role involved creating an intuitive and responsive user interface for our villa and hotel booking platform. StayEase allows users to easily search for, compare, and book accommodations. I focused on implementing dynamic and interactive features using React.js, ensuring a smooth and engaging user experience.Overall, my work on StayEase focused on leveraging React.js to build a powerful and user-centric booking platform, contributing to a successful group project outcome."
              ghLink="https://github.com/SRJM941/stayEase"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Temperature Converter"
              description="The Temperature Converter is a web application built using HTML, CSS, and JavaScript that allows users to easily convert temperatures between different units. The tool is designed to provide a simple and intuitive interface for converting temperatures from Celsius to Fahrenheit, Kelvin, and vice versa.Overall, the Temperature Converter project showcases the ability to create a functional and visually appealing web application using fundamental web technologies. It serves as a practical tool for anyone needing quick and accurate temperature conversions."
              ghLink="https://github.com/manojnayak45/temperatureconverter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Netflix Landing page"
              description="The Netflix Landing Page is a web project built using HTML, CSS, and JavaScript, designed to replicate the look and feel of Netflix's homepage. This project serves as a static representation of Netflix's landing page, providing a visually appealing and interactive experience for users.Overall, the Netflix Landing Page project demonstrates the ability to create a visually striking and interactive web page using HTML, CSS, and JavaScript. It captures the essence of Netflix's design while providing a seamless and engaging user experience."
              ghLink="https://github.com/manojnayak45/netflix-landing-page"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects