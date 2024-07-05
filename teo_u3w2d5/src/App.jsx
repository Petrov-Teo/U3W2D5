import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBarT from "./components/NavBarT.jsx";
import CenterComp from "./components/CenterComp.jsx";
import CampoForm from "./components/CampoForm.jsx";

function App() {
  return (
    <>
      <NavBarT />
      <Container className="text-center">
        <CenterComp titolo="Welcome to Teo Pi Weather" />
        <CampoForm />
      </Container>
    </>
  );
}

export default App;
