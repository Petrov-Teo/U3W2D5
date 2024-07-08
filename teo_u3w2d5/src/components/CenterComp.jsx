import { Col, Container, Row } from "react-bootstrap";

const CenterComp = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            className="navbarOpacity mt-3"
            src="https://www.forumforyou.it/Image/meteo_script.gif"
            alt="Logo"
            width="120"
            height="120"
          />
        </Col>
        <Col xs={12}>
          <h1 className="my-3 display-1">{props.titolo}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default CenterComp;
