import React from "react";
import { Link } from "react-router-dom";
import NewCanvasFrom from "./NewCanvasForm";

function LandingPage() {
  return (
    <div>
      <h4>Landing Page</h4>
      <h1>
        <Link to="/draw">Draw</Link>
      </h1>
    </div>
  );
}

export default LandingPage;
