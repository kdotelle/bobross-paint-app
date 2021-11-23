import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import SvgIcon from "@mui/material/SvgIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import gif from "./styles/chrome-capture.gif";
import headshot from "./styles/headshot.jpg";
import "./styles/LandingPageStyles.css";

function LandingPage() {
  return (
    <div className="root">
      <div className="container-fluid">
        <div className="p-5 mb-4 bg-light rounded-3 opacity-85">
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
        <div className="row align-items-md-stretch justify-content-between">
          <div className="col-md-6">
            <div className="h-100 p-5 rounded-3">
              <h3 className="display-5 fw-bold">About the App</h3>
              <p>
                An interactive Canvas app that allows users to draw directly on
                the canvas. Users have the ability to pick a color via slider or
                HEX and RGB codes with the implemented color picker. They also
                have the option to adjust the brush size, undo brush strokes,
                and clear the palette.
              </p>
            </div>
          </div>
          <div className="img col-md-6 p-5 rounded-3">
            <img src={gif} alt="app demo" />
          </div>
        </div>
        <div className="row align-items-md-stretch justify-content-center flex-row-reverse mt-3">
          <div className="col-md-6">
            <div className="p-5 rounded-3">
              <h3 className="display-5 fw-bold">Meet the Engineer</h3>
              <p>
                I'm a Junior MERN Stack Developer based out of Northern VA. I
                use web development to bridge my passions of creativity and
                problem solving.
              </p>
            </div>
          </div>
          <Card className="col-md-3 p-1" color="light">
            <CardImg alt="Card image cap" src={headshot} top width="18rem" />
            <CardBody>
              <CardTitle tag="h4">Kristen Lloyd</CardTitle>
            </CardBody>
          </Card>
        </div>
        <footer className="d-flex flex-row justify-content-between align-items-center py-3 my-4 border-top bg-light opacity-75">
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
    </div>
  );
}

export default LandingPage;
