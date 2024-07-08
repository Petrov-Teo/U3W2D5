import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaTemperatureHigh } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiDropBold } from "react-icons/pi";
import { FiWind } from "react-icons/fi";
import { BsClock } from "react-icons/bs";

const ResultPage = () => {
  const { lat, lon } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeatherData = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d64c9eea3930483f07c2c26cbb66be20`
      )
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error("Errore nella chiamata");
          }
        })
        .then((data) => {
          setWeatherData(data);
          console.log(data);
        })
        .catch((e) => {
          console.error("Errore!", e);
        });
    };

    fetchWeatherData();
  }, [lat, lon]);

  const formatDate = (time) => {
    const date = new Date(time * 1000);
    return date.toLocaleDateString("it-IT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4 display-3">Weather Results</h1>
          {weatherData ? (
            <div>
              <p className="display-1 text-light opacity rounded-pill">
                {weatherData.name} - {weatherData.sys.country} -
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </p>
              <br />
              <p className="fs-3">
                <span className="fs-4 me-4">Temperature:</span>
                {(weatherData.main.temp - 273.15).toFixed(1)}°C <FaTemperatureHigh className="ms-3" />
              </p>
              <p className="fs-3">
                <span className="fs-4 me-4">Weather:</span> {weatherData.weather[0].description.toUpperCase()}
                <TiWeatherPartlySunny className="ms-3" />
              </p>
              <p className="fs-3">
                <span className="fs-4 me-4">Humidity:</span> {weatherData.main.humidity}%<PiDropBold className="ms-3" />
              </p>
              <p className="fs-3">
                <span className="fs-4 me-4"> Wind Speed:</span> {weatherData.wind.speed} m/s <FiWind className="ms-3" />
              </p>
              <p className="fs-3">
                <span className="fs-4 me-4">Date:</span> {formatDate(weatherData.dt)} <BsClock className="ms-3" />
              </p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
      <Button
        className="mt-3 buttonsColor"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default ResultPage;
