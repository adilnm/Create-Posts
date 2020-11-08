export const createPost=(data)=>{
    return dispatch=>{
        fetch("http://localhost:3001/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then(res=>res.json())
          .then(post=>dispatch({ type: 'ADD-POST', payload:post }))
    }
}

export const Posts=()=>{
    return dispatch=>{
        fetch("http://localhost:3001/posts")
            .then(res=>res.json())
            .then(posts=>{
                dispatch({ type: 'ALL-POSTS', payload:posts })
            })
    }
}

export const deletePost=(id)=>{
    return dispatch=>{
        fetch(`http://localhost:3001/posts/${id}`, {
            method: 'DELETE'            
        })
            .then(res=>res.json())
           
    }
}