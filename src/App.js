import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/login";
import Photos from "./components/photos";
import { createGlobalStyle } from 'styled-components'

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
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
        </Switch>
      </Router>
    </globalStyles>
  );
}

export default App;
