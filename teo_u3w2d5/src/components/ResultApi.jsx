import { Container, ListGroup, Row } from "react-bootstrap";

const ResultApi = ({ searchApi }) => {
  return (
    <Container className="mt-5 opacity">
      <Row>
        <ListGroup as="ul">
          {searchApi.map((result, index) => (
            <ListGroup.Item as="li" key={index}>
              {result.name}, {result.country}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};
export default ResultApi;
