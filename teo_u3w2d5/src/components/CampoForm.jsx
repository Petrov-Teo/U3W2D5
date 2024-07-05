import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function CampoForm() {
  const [city, setCity] = useState("");

  const searchCityFetch = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=d64c9eea3930483f07c2c26cbb66be20`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error("Errore!", e);
      });
  };

  return (
    <Container>
      <Row>
        <Form.Group as={Col} md={12} controlId="validationCustom03">
          <Form.Label className="fs-4">Search your City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          <Button onClick={searchCityFetch} className="mt-3 btn btn-dark">
            Search
          </Button>
        </Form.Group>
      </Row>
    </Container>
  );
}

export default CampoForm;
