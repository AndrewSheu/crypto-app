import "./App.css";
import React from "react";
import NavBar from "./components/navigationBar";
import Home from "./components/home";
import Footer from "./components/footer";
import TopCryptos from "./components/topCrytos";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/">
            <TopCryptos></TopCryptos>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
