import React from "react";
import { SelectBox } from "../SelectBox/SelectBox";
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";
import "./List.scss";

export function List({ places }) {
  return (
    <section className="list-container">
      <h3 className="title">Resturants, Hotes &amp; Attraction around you</h3>
      <div className="form">
        <div className="select-container">
          <span>Type</span>
          <SelectBox type={"type"} />
        </div>
        <div className="select-container">
          <span>Rating</span>
          <SelectBox type={"rating"} />
        </div>
      </div>
      <section className="cards-container">
        {places.map((place, index) => {
          return (
            <PlaceDetails place={place} key={index}/>
          )
        })}
      </section>
    </section>
  );
}
