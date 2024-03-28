import "./App.css";
import React from "react";
import NavBar from "./components/navigationBar";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
