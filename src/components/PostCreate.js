import React from "react";

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
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: this.state
    });
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

export default PostCreate;
