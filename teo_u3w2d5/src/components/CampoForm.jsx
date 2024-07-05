import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function CampoForm() {
  const [city, setCity] = useState("Roma");

  useEffect(() => {
    console.log(city);
  }, [city]);
  return (
    <Container>
      <Row>
        <Form.Group as={Col} md={12} controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          <Button className="mt-3 ">Search</Button>
        </Form.Group>
      </Row>
    </Container>
  );
}

export default CampoForm;
