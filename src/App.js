import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./components/login";
import Register from './components/register';
import Photos from "./components/photos";
import { createGlobalStyle } from 'styled-components'
import GlobalProvider from "./components/context/globalContext";

function App() {

  const globalStyles = createGlobalStyle`
    body {
      padding:0;
      margin: 0;
      box-sizing: border-box;
    }
  `

  return (
    <globalStyles>
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
    </globalStyles>
  );
}

export default App;
