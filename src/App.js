import React from "react";
import NewCanvasForm from "./NewCanvasForm.js";
import LandingPage from "./LandingPage.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/draw" element={<NewCanvasForm />} />
      </Routes>
    </div>
  );
}

export default App;
