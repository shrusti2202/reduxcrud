import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const showUser=createAsyncThunk('showUser',async()=>{
  const res=await axios.get(`http://localhost:3000/user`);
  console.log(res.data);
  return res.data;
});

export const insert=createAsyncThunk('insert',async(formvalue)=>{
  const res=await axios.post(`http://localhost:3000/user`,formvalue);
  console.log(res);
});
export const Adminslice = createSlice({
  name: 'admin',
  initialState: {
   
  },
  extraReducers:{
    [showUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
  }
})

export const {  } = Adminslice.actions

export default Adminslice.reducer