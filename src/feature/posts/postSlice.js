import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState=[
        {id:'001',title:'Learning Redux Toolkit',
        content:"I have heard good things",
        date:sub(new Date(),{minutes:10}).toISOString(),
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
        },
        {id:'002',title:'Slices...',
        content:"The more i say slice,the more I...",
        date:sub(new Date(),{minutes:6}).toISOString(),
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
        }
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
            state.push(action.payload)
            },
            prepare(title,content,userId){
                return {
                    payload:{
                        id:nanoid,
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
    reactionAdded(state,action){
        const {postId,reaction} = action.payload
        const existingPost = state.find(post => post.id ===postId)
        if(existingPost){
            existingPost.reactions[reaction]++
        }
    }
    }
})
export const selectAllPosts = (state) =>state.posts;
export const {postAdded,reactionAdded} = postSlice.actions;
export default postSlice.reducer;