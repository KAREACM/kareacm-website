import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET'S <span className="purple"> INTRODUCE </span> THE CHAPTER
            </h1>
            <p className="home-about-body">
              The Association for Computing Machinery (ACM) stands at the
              forefront of the computing world as world’s largest educational
              and scientific computing society.
              <br />
              <br />
              We are a
              <i>
                <b className="purple">
                  {" "}
                  a dynamic community of tech enthusiasts driven by a shared
                  passion to explore the multifaceted world of computing{" "}
                </b>
              </i>
              <br />
              <br />
              we believe that teamwork is not just a concept, &nbsp;
              <br />
              <br />
              With a focus on nurturing talent and promoting learning, the
              chapter provides a platform for students to dive into{" "}
              <i>
                <b className="purple">
                  {" "}
                  technical challenges, engage in collaborative projects, and
                  interact with industry professionals
                </b>
              </i>
              <br />
              <br />
              <i>
                Our main motive is to empower the students to{" "}
                <b className="purple">develop</b> and{" "}
                <b className="purple">enhance their skills</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF1t_jLAaCUVP4Ppt-bvme5x0BUl_FILU2g&s" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kareacm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/acmkare/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/acmkare/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
