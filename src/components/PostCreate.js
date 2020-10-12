import React from 'react';

class PostCreate extends React.Component{

    constructor(props){
        super()
        this.state={
            content:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return (
          <div className="PostCreate">
            <form>
                <textarea onChange={this.handleChange} type="textarea" placeholder="Content" name="content"/><br/>
                <input type="submit"/>
            </form>
          </div>
        );
      }
}

export default PostCreate