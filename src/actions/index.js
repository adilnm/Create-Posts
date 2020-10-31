export const createPost=(data)=>{
    return dispatch=>{
            fetch('http://localhost:3001/createpost', {
                method: 'POST',
                credentials: 'include',
                body:post
            })
    }
}