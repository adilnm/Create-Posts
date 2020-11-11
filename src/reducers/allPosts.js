export default (state=[],action)=>{
    switch (action.type) {
            case "ALL-POSTS":
              return action.payload;
            case "DELETE-POST":
              return [...state.filter(i => i.id !== action.payload.id)];
            default:
              return state;
          }
}