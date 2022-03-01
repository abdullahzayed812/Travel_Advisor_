import React from "react";
import { ImLocation } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";
import "./PlaceDetails.scss";

export function PlaceDetails({ place }) {
    return (
        <article className="box">
            <img
                className="main-image"
                src={place.photo ? place.photo.images.large.url : "https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg"}
                alt={place.name}
            />
            <h5 className="name">{place?.name}</h5>
            <div className="price">
                <span>Price</span>
                <span>{place.price_level}</span>
            </div>
            <div className="ranking">
                <span>Ranking</span>
                <span>{place.ranking}</span>
            </div>
            {place?.awards?.map((award, index) => {
                return (
                    <div className="awards" key={index}>
                        <img 
                            src={award.images.small}
                            alt={award.display_name}
                        />
                        <span>{award.display_name}</span>
                    </div>
                )
            })}
            <div className="cuisine-box">
                {place?.cuisine?.map(({ name }) => {
                    return (
                        <span className="cuisine" key={name}>{name}</span>
                    )
                })}
            </div>
            {place?.address && (
                <div className="address">
                    <ImLocation className="info-icon" />
                    {place.address}
                </div>
            )}
            {place?.phone && (
                <div className="address">
                    <AiFillPhone className="info-icon" />
                    {place.phone}
                </div>
            )}
            <div className="btn-box">
                <button
                    type="button"
                    onClick={() => window.open(place.web_url, "_blank")}
                >
                    Trip Advisor
                </button>
                <button
                    onClick={() => window.open(place.website, "_blank")}
                    type="button"
                >
                    Website
                </button>
            </div>
        </article>
    )
}