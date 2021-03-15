import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import router from "./router/index";
import Navbar from "./components/Navbar";
import { data } from "./store/slices/weather/weatherSlice";

const App = () => {
  const appname = "kink";
  const [weather, setWeather] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const dispatch = useDispatch();
  const url = `https://api.openweathermap.org/data/2.5/`;
  const apiKeyOne = `0090d8aaa32bf9febaf7a309730cb263`;
  //const apiKeyTwo = `ad1fff0cba44b8fb800684e28eb2bd97`;

  // fetch weather details
  useEffect(() => {
    const successCallback = position => {
      () => setCoordinates(position.coords);
      fetch(
        `${url}onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=${apiKeyOne}`
      )
        .then(res => res.json())
        .then(res => setWeather(res))
        .catch(error => console.warn(error));
    };
    const errorCallback = error => console.warn(error);

    navigator.geolocation.watchPosition(successCallback, errorCallback, {
      enableHighAccuracy: true,
      timeout: 100000,
      maximumAge: 0
    });
  }, []);

  // update weather
  dispatch(data(weather));

  return (
    <div className="w-full min-h-screen pt-20 text-gray-800 bg-gray-100">
      <Navbar />
      <Switch>
        {router.map((route, index) => (
          <Route
            path={route.path}
            exact={route.isExact}
            render={() => <route.component appname={appname} />}
            key={index}
          />
        ))}
      </Switch>
    </div>
  );
};

export default App;
