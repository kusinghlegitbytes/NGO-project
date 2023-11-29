import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchNGOsAsync=createAsyncThunk("ngo/fetchNGOsAsync", async(_, {rejectWithValue})=>{
    try{
        const response=await axios.get(
            `http://localhost:4000/api/v1/ngos`, 
            {
                headers: { 
                    "Content-Type": "application/json"
                },
            }
        )
        return response.data
    }catch(err){
        return rejectWithValue(err.response.data)
    }
})