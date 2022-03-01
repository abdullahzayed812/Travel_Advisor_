import React from "react";
import GoogleMapReact from "google-map-react";
import { GoLocation } from "react-icons/go";
import "./Map.scss";

export function Map({ coordinates, setCoordinates, setBounds, places }) {
    return (
        <section className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBEZ_pqCqdl9yVE2EqQ4vevvlFTnvuQugk" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={(e) => {
                    setCoordinates({
                        lat: e.center.lat,
                        lng: e.center.lng
                    });
                    setBounds({
                        ne: e.marginBounds.ne,
                        sw: e.marginBounds.sw
                    });
                }}
                onChildClick={() => {}}
            >
                {places.map((place, index) => {
                    return (
                        <div
                            className="mark-container"
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={index}
                        >
                            {window.innerWidth < 767 ? (
                                <GoLocation className="go-location" />
                            ) : (
                                <div className="map-card">
                                    <h6 className="map-card-name">
                                        {place.name}
                                    </h6>
                                    <img
                                        className="map-card-image"
                                        src={place.photo ? place.photo.images.large.url : "https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg"}
                                        alt={place.name}
                                    />
                                </div>
                            )}
                        </div>
                    )
                })}
            </GoogleMapReact>
        </section>
    )
}