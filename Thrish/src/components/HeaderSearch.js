import React from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";
import { GeoAltFill, Bell, Cart } from "react-bootstrap-icons";
const HeaderSearch = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px #c4c4c4 solid",
        padding:"0.5rem 0.5rem 0 0.5rem",
      }}
    >
      <div className="location" style={{ width: "20%", display: "flex" }}>
        <GeoAltFill size={30} />
        <p style={{ fontSize: "0.7rem" }}>
          Home Delivery and Store Pickup Service Available
        </p>
      </div>
      <InputGroup
        className="searchBar"
        style={{ width: "60%", height: "2rem" }}
      >
        <DropdownButton
          variant="outline-secondary"
          title="All Products"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">All Products</Dropdown.Item>
          <Dropdown.Item href="#">General Store</Dropdown.Item>
          <Dropdown.Item href="#">Pharmacy</Dropdown.Item>
        </DropdownButton>
        <Form.Control
          aria-label="Search for..."
          placeholder="Search for... Products or Pharmacy"
        />
        <Button className="primary rounded-pill mx-4">Search</Button>
      </InputGroup>

      <div>
        <Bell size={25} />
        <Cart size={25} />
      </div>
    </div>
  );
};

export default HeaderSearch;
