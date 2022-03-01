import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import "./Header.scss";

export function Header() {
    return (
        <header>
            <h4 className="logo">Travel Advisor</h4>
            <div className="search-container">
                <h5 className="search-title">Explor new places</h5>
                <div className="search-box">
                    <FaSearchLocation className="search-icon" />
                    <input type="text" />
                </div>
            </div>
        </header>
    )
}