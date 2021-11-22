import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./styles/LandingPageStyles.css";

function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header fw-bold">Paint Like Bob Ross</h1>
        <div className="row">
          <div className="col-sm-8">
            <h3 className="display-5 fw-bold">
              We don't make mistakes, just happy little accidents.
            </h3>
            <p>
              Discover the artist in you and embrace your creative side.
              Transform the canvas with creativity and color. Draw free form or
              fill the canvas with one click.
            </p>
          </div>
          <div className="col-sm-4">
            <Link to="/draw">
              <Button block color="primary" size="lg">
                Try it!
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>About Me</h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
