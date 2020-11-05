import React from "react";
import PostCreate from "./components/PostCreate";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import { connect } from "react-redux";
import { Posts } from "./actions";

class App extends React.Component {

  componentDidMount(){
    this.props.Posts()
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/new" component={PostCreate} />
          <Route exact path="/" component={AllPosts} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, {Posts})(App);
