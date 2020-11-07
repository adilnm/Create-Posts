import React, { Component } from 'react'

export default class Post extends Component {
    
    render() {
        const {posts}=this.props
        const{postId}=this.props.match.params
        const post=posts.filter(i=>i.id==postId)
        if (posts.length>0) {
            return(
                <div>
                    <h1>{post[0].title}</h1>
                    <div>{post[0].body}</div>
                </div>
            )
        }else{
            return null
        }
        
    }
}
