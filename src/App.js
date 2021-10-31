import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./components/login";
import Register from './components/register';
import Photos from "./components/photos";
import { createGlobalStyle } from 'styled-components'; 
import GlobalProvider from "./components/context/globalContext";
import NavBar from "./components/navbar/navbar";

function App() {

  const GlobalStyles = createGlobalStyle`
    html,body {
      padding:0;
      margin: 0;
      box-sizing: border-box;
    }
  `

  return (
    <>
    <GlobalStyles/>
      <NavBar/>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
