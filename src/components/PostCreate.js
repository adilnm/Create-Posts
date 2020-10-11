import React from 'react';

class PostCreate extends React.Component{
    render(){
        return (
          <div className="PostCreate">
            <form>
                <textarea type="textarea" placeholder="Content"/><br/>
                <input type="submit"/>
            </form>
          </div>
        );
      }
}

export default PostCreate