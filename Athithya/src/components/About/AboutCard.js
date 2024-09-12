import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, This is the official <span className="purple"> KARE ACM S Chapter Website </span>
            <br />
            We're a dynamic community of tech enthusiasts driven by a shared passion to explore the multifaceted world of computing.
            <br />
            <br />
            We achieve this by providing a platform for students to dive wonderful stuff such as:
            <br />
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technical Challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborative Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Interactions with Industry Professionals.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Athithya (ACM Student Chapter)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
