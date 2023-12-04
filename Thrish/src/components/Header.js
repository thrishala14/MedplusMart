import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./headerStyle.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import LoginContext from "./LoginContext";
import { PersonFill, Android2, Apple } from "react-bootstrap-icons";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const { show, setShow } = useContext(LoginContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "5px 0 5px 5px",
          fontSize: "15px",
          justifyContent:"space-between"
        }}
      >

        <img srcSet="https://static2.medplusmart.com/live/webpwa/assets/mart-identity-cssbg.d6382397831e78dfad81.svg 1450w"></img>
        <div className="headerLinks">
          <div style={{ margin: "10px" }}>
            <Link to="/home" className="link">
              Call 040 - 67006700 for help!
            </Link>
          </div>
          <div style={{ margin: "10px" }}>
            <Link to="/home" className="link">
              Store Finder
            </Link>
          </div>
          <div style={{ margin: "10px" }}>
            <Link to="/home" className="link">
              Download App <Android2 /> <Apple />
            </Link>
          </div>
          <div style={{ margin: "10px" }}>
            <Link
              to="/login"
              className="link"
              onClick={() => {
                setShow(true);
              }}
            >
              Login/Register <PersonFill />
            </Link>
          </div>
        </div>
      </div>
      <HeaderSearch/>
    </>
  );
};

export default Header;
