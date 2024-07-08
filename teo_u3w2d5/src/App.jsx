import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBarT from "./components/NavBarT.jsx";
import CenterComp from "./components/CenterComp.jsx";
import CampoForm from "./components/CampoForm.jsx";

import ResultApi from "./components/ResultApi.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPages from "./components/NotFounPages.jsx";
import Info from "./components/Info.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBarT />
      <Container className="text-center">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CenterComp titolo="Welcome to Teo Pi Weather" />
                <CampoForm />
              </>
            }
          />
          <Route path="/result/:lat/:lon" element={<ResultApi />} />
          <Route path="*" element={<NotFoundPages />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
