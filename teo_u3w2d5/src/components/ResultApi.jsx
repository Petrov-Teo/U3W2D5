import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const ResultPage = () => {
  const { lat, lon } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  let navigate = useNavigate();

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

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4 display-3">Weather Results</h1>
          {weatherData ? (
            <div>
              <p className="display-1 text-light bg-dark opacity rounded-pill">{weatherData.name}</p>
              <br />
              <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
              <p>Weather: {weatherData.weather[0].description}</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
      <Button
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
