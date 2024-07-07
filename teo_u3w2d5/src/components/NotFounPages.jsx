import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundPages = () => {
  const navigate = useNavigate();
  return (
    <Container className="text-center d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-1 text-dark mt-5">THIS PAGE IS NOT AVAILABLE</h1>
      <Button
        onClick={() => {
          navigate("/");
        }}
        className="mt-4"
      >
        Home
      </Button>
    </Container>
  );
};

export default NotFoundPages;
