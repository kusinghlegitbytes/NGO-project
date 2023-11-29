import {createSlice} from "@reduxjs/toolkit"
import {fetchNGOsAsync} from "../apis/ngoAPIs"
const ngoSlice=createSlice({
    name:"ngo",
    initialState:{
        ngos:[],
        totalRecords:0,
        error:{},
        loading:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNGOsAsync.pending, (state, action)=>{
            state.loading=true
        })
        .addCase(fetchNGOsAsync.fulfilled, (state, action)=>{
            state.loading=false
            state.ngos=action.payload.data
            state.totalRecords=action.payload.noOfRecords
        })
    }
})
const ngoReducer=ngoSlice.reducer
export default ngoReducer