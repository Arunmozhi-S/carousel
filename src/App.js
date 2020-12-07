import React from "react";

import "./App.css";
import Carousel from "./components/carousel";
import { pictures } from "./components/pictures";
// import background from "./assets/background.jpg";
// <div style={{ backgroundImage: `url(${background})` }}>
// </div>

function App() {
  return <Carousel slides={pictures} />;
}

export default App;
