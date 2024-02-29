import { createSlice } from "@reduxjs/toolkit";
const initialState={
    token:"",
}
const AuthSlice=createSlice({
    name:"Auth",
    initialState,
    reducers:{
        SET_TOKEN:(state, action)=>{
            state.token=action.payload;
        }
    }
})

export default AuthSlice.reducer;