import React from "react";
import Navebar from "./assets/components/Navebar/Navebar";
import Footer from "./assets/components/Footer/Footer";
import RouteApp from "./assets/routes/RouteApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navebar/>
          <RouteApp/> 
          <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;