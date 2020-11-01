import React from "react";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostCreate extends React.Component {
  constructor(props) {
    super();
    this.state = {
      content: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost({some:"adil"})
  };

  render() {
    return (
      <div className="PostCreate">
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            type="textarea"
            placeholder="Content"
            name="content"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect (null,{createPost})(PostCreate);
