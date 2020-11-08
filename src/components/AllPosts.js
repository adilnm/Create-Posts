import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AllPosts extends React.Component {
    componentDidMount(){
        
    }
    render(){
        if (this.props.posts.length>0) {
            return(
                <div>
                    <h1>Posts</h1>
                    {this.props.posts.map(post=>{
                        return(
                        <Link key={post.id} to={`/posts/${post.id}`}><li>{post.title}</li></Link>
                        )
                    })}
                </div>
                    
            )
        }else{return null}
    }
}

const mstp=state=>{
    return{
        posts:state.allPosts    
    }
}

export default connect(mstp)(AllPosts)