import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid className="my-4 py-5">
      <Row>
        <Col
          sm={4}
          className="d-flex justify-content-center contact-icon-container"
        >
          <a
            href="https://www.facebook.com/oliko.stepanova"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            <i className="fab fa-facebook-f fa-4x link"></i> 
            <div className="contact-name mt-4">
                <h2 className="text-center">Olga Stepanova</h2>
            </div>
          </a>
        </Col>
        <Col
          sm={4}
          className="d-flex justify-content-center contact-icon-container"
        >
          <a
            href="https://www.instagram.com/olgh.a/"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            <i className="fab fa-instagram fa-4x link"></i>
            <div className="contact-name mt-4">
                <h2 className="text-center">Olgh.a</h2>
            </div>
          </a>
        </Col>
        <Col
          sm={4}
          className="d-flex justify-content-center contact-icon-container"
        >
          <a
            href="https://www.tiktok.com/@olgh.a"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            <i className="fab fa-tiktok fa-4x link"></i>
            <div className="contact-name mt-4">
                <h2 className="text-center">olgh.a</h2>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
