import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import members1 from '../../Assets/Photos/members1.jfif';
import members2 from '../../Assets/Photos/members2.jfif';
import members3 from '../../Assets/Photos/members3.jfif';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="justify-content-center mt-4">
          <Col md={4} className="text-center mb-4">
            <img src={members1} alt="Member 1" className="img-fluid rounded" />
          </Col>
          <Col md={4} className="text-center mb-4">
            <img src={members2} alt="Member 2" className="img-fluid rounded" />
          </Col>
          <Col md={4} className="text-center mb-4">
            <img src={members3} alt="Member 3" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
