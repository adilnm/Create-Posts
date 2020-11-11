import React, { Component } from 'react'
import { connect } from "react-redux";
import { deletePost } from '../actions';

class Post extends Component {
    
    handleDelete=e=>{
        this.props.deletePost(this.props.match.params.postId)
    }
    render() {
        const {posts}=this.props
        const{postId}=this.props.match.params
        const post=posts.filter(i=>i.id==postId)
        if (posts.length>0) {
            return(
                <div>
                    <h1>{post[0].title}</h1>
                    <div>{post[0].body}</div>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            )
        }else{
            return null
        }
        
    }
}

export default connect(null,{deletePost})(Post)
