import { Container, Row } from "react-bootstrap";

const ResultApi = () => {
  return (
    <Container className="opacity">
      <Row>
        {/* <ListGroup as="ul" className="mt-3">
          {searchApi.map((result, index) => (
            <ListGroup.Item className="fs-3 text" as="li" key={index}>
              {result.name}, {result.country}, {result.state}
              <Button className="ms-5 btn btn-lith">Select</Button>
            </ListGroup.Item>
          ))}
        </ListGroup> */}
      </Row>
    </Container>
  );
};
export default ResultApi;
