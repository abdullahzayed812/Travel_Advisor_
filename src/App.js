import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Map } from "./components/Map/Map";
import { getPlacesData } from "./api";
import "./App.scss";

const getBoundsFromLocalStorage = () => {
  const bounds = localStorage.getItem('bounds');
  if (bounds) {
    return JSON.parse(bounds);
  }
  return {};
}

export function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(getBoundsFromLocalStorage());

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      setCoordinates({
        lat: latitude,
        lng: longitude
      });
    })
  }, [])

  useEffect(() => {
    getPlacesData(bounds.ne, bounds.sw)
      .then((data) => {
        setPlaces(data);
    });
    localStorage.setItem("bounds", JSON.stringify(bounds));
  }, [coordinates, bounds]);

  return (
    <React.Fragment>
      <Header />
      <section className="container">
        <List places={places} />
        <Map
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          places={places}
        />
      </section>
    </React.Fragment>
  );
}
