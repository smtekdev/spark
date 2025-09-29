import React from "react";
import Navebar from "./assets/components/Navebar/Navebar";
import Footer from "./assets/components/Footer/Footer";
import RouteApp from "./assets/routes/RouteApp";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navebar />
        <RouteApp /> 
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
