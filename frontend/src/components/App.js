import React, { Component } from "react";
import {BrowserRouter as Router,
        Switch,
        Route,
        Link,
        Redirect
       } from "react-router-dom";
import { render } from "react-dom";

import Home from "./Home";
import ComposeRecipe from "./ComposeRecipe";
import RecipeDetail from "./RecipeDetail";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/recipe/:id" component={RecipeDetail} />
            <Route exact path="/" component={Home} />
            <Route path="/create-recipe" component={ComposeRecipe} />
            
            
          </Switch>
        </Router>
        
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
