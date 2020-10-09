import React from "react";
import PostCreate from "./components/PostCreate";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/new" component={PostCreate} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
