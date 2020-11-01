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