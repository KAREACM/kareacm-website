import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ECommerce from "../../Assets/Projects/E-Commerce.jpg";
import Pic1 from "../../Assets/Projects/Pic1.jpeg";
import Pic2 from "../../Assets/Projects/Pic2.jpeg";
import Pic3 from "../../Assets/Projects/Pic3.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Events </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few upcoming events in our chapter.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pic3}
              isBlog={false}
              title="Code Sprint 100"
              description="Improve your coding skills with Code Sprint 100. This event is a 100-day coding challenge that will help you improve your coding skills. You will be given a new coding challenge every day for 100 days. You can solve the challenge in any programming language of your choice. You can also discuss the challenge with other participants in the ACM-KARE community. This event is open to all ACM-KARE members."
              demoLink=""
              ghLink="https://forms.gle/Je7arWnidy1qKsRS9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pic2}
              isBlog={true}
              title="Idea Spark"
              description="Idea Spark is a platform for ACM-KARE members to share their project ideas with the community. You can post your project ideas on Idea Spark and get feedback from other ACM-KARE members. You can also collaborate with other members to work on your project ideas. The theme for 2K24 is 'Sustainability'. Participants can work in teams of up to 4 members. The best ideas would receive funding from ACM-KARE to turn their ideas into reality."
              demoLink="https://drive.google.com/drive/folders/1ttx0oe1-W6aE8CoszhuasEjn4s5hOdvz?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pic1}
              isBlog={false}
              title="DisFrutar 2K24"
              description="DisFrutar 2K24 is a 24-hour hackathon organized by ACM-KARE. This would be a great opportunity consiting of 5 days of Learning, 3 Intensive Bootcamps and one hackathon along with Internship opportunities. There would be huge prize money for the grand winners and open to all KARE-ACM members."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
