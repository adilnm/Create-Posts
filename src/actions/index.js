export const createPost=(data)=>{
    return dispatch=>{
        fetch("http://localhost:3001/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          })
    }
}