import { combineReducers } from "redux";
import allPosts from "./allPosts";
import createPost from "./createPost";

export default combineReducers({
    createPost,
    allPosts
})