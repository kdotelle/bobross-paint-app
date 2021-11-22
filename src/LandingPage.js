import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import SvgIcon from "@mui/material/SvgIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./styles/LandingPageStyles.css";

function LandingPage() {
  return (
    <div className="root">
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
                Transform the canvas with creativity and color. Draw free form
                or fill the canvas with one click.
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
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="p-5 text-white bg-dark border rounded-3">
              <h3 className="display-5 fw-bold">About Me</h3>
              <p>
                I'm a driven Junior MERN Stack Developer based out of Northern
                VA. I use web development to bridge my passions of creativity
                and problem solving.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-light fixed-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 text-center">
              <h5>Social</h5>
              <a
                className="btn "
                href="https://www.linkedin.com/in/kristenlloyd/"
              >
                <LinkedInIcon color="primary" fontSize="large" />
              </a>
              <a className="btn" href="https://github.com/kdotelle">
                {" "}
                <GitHubIcon fontSize="large" />
              </a>
              <a className="btn" href="https://twitter.com/_ImKristen">
                <TwitterIcon color="primary" frontSize="large" />
              </a>
            </div>
            <div className="col-4 text-center">
              <p>Copyright © Kristen Lloyd 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
