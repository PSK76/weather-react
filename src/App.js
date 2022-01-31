import "./App.css";
import "./index.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    id="city-input"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city">Edmonton</h1>
              <ul>
                <li>
                  Last updated:<span id="date"></span>
                </li>
                <li id="description">Broken Clouds</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src="http://openweathermap.org/img/wn/04n@2x.png"
                    alt="cloudy"
                    id="icon"
                    width="50"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong id="temperature">-17</strong>
                    <span className="units">
                      <a href=" " id="celsius-link">
                        °C
                      </a>
                      |
                      <a href=" " id="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Feels like:<span id="feels-like">-25</span>°
                  </li>
                  <li>
                    Humidity:<span id="humidity">72</span>%
                  </li>
                  <li>
                    Wind:<span id="wind">10</span>km/hr
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <small>
            <a href="https://github.com/PSK76/Weather-search" id="source-code">
              Open source code
            </a>
            , by
            <a href="https://www.linkedin.com/in/priyanka-ganesh-950629206/">
              {" "}
              Priyanka
            </a>{" "}
            & hosted on
            <a href="https://boring-fermat-b6315b.netlify.app"> Netlify</a>.
          </small>
        </div>
      </div>
    </div>
  );
}
