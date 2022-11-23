import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
const AddPostForm = () =>{
    const dispatch = useDispatch()

    const [title,setTitle]= useState("")
    const [content,setContent] = useState("")
    const [userId,setUserId] = useState("")
    
    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)
    const onSavePostClicked =()=>{
        if(title && content){
            dispatch(
                postAdded(title,content,userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const onUserOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
                {user.name}
        </option>
    ))

    return (
        <section >
            <h2>Add a New Post</h2>
            <form>
                <div>
                    <label htmlFor="postTitle">Post Title:</label>
                    <input type="text" value={title}
                    onChange={onTitleChanged}/>
                </div>
                                
                <div>
                    <label htmlFor="postAuthor">Author:</label>
                    <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                        <option value=""></option>
                        {onUserOptions}
                    </select>
                </div>
                <div>
                    <label htmlFor="postContent"> Content:</label>
                    <input type="text" value={content}
                    onChange={onContentChanged}/>
                </div>
                

                <button type="button" 
                onClick={onSavePostClicked}
                disabled={!canSave}>
                    Save Post
                </button>
            </form> 
        </section>
    )
}
export default AddPostForm