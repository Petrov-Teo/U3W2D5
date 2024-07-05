import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBarT from "./components/NavBarT.jsx";
import CenterComp from "./components/CenterComp.jsx";
import CampoForm from "./components/CampoForm.jsx";
import { useState } from "react";
import ResultApi from "./components/ResultApi.jsx";

function App() {
  const [city, setCity] = useState("");
  const [searchApi, setSearchApi] = useState(null);

  return (
    <>
      <NavBarT />
      <Container className="text-center">
        <CenterComp titolo="Welcome to Teo Pi Weather" />
        <CampoForm search={city} setCity={setCity} setSearchApi={setSearchApi} />
        {searchApi && <ResultApi searchApi={searchApi} />}
      </Container>
    </>
  );
}

export default App;
