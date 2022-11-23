import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0',name:'Jayant J'},
    {id:'1',name:'Niraj Mane'},
    {id:'2',name:'Tanish K'}
]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer