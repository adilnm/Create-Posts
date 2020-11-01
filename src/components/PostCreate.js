import React from "react";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostCreate extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title:"",
      body: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
  };

  render() {
    return (
      <div className="PostCreate">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="title" placeholder="Title" /><br/>
          <textarea
            onChange={this.handleChange}
            type="textarea"
            placeholder="Content"
            name="body"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostCreate);
