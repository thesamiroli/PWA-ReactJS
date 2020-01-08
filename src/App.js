import React from "react";
import "./App.css";
import Home from "./Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Detail";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://mock-io.herokuapp.com/users")
      .then(data => data.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home users={this.state.users} />}
          />
          <Route
            path="/:id"
            render={props => {
              let id = props.match.params.id - 1;
              return <Detail users={this.state.users[id]} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
