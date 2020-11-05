import React from "react";
import PostCreate from "./components/PostCreate";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import { connect } from "react-redux";
import { Posts } from "./actions";
import Post from "./components/Post";

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
          <Route exact path="/posts/:postId" render={props => <Post posts={this.props.posts}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

const mstp = (state) => {
  return {
    posts:state.allPosts
  }
}
export default connect(mstp, {Posts})(App);
