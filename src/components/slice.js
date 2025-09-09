import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

let fetchProducts=createAsyncThunk('prod',async ()=>{

    console.log("async thunk ...fetchProducts called")
    //let r=await axios.get("http://localhost:8080/")

    let r=await axios.get("https://spring-boot-1-u2qc.onrender.com/")

    //https://spring-boot-1-u2qc.onrender.com
    return r.data

})


let myslice=


    createSlice({

        name: 'products',
        initialState: {
            allRecords: [],
            cart: [],
            selectedRecord: '',
            searchedRecords: [],


        },
        reducers: {
            setSelectedRecord: (state, action) => {
                state.selectedRecord = action.payload;
            },
            setSearchedRecords: (state, action) => {
                state.searchedRecords = action.payload;
            }


        },

        extraReducers: (builder) => {
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.allRecords = action.payload;
                state.searchedRecords = action.payload;
            })

        }


    })





export default fetchProducts
 let red= myslice.reducer
let {setSelectedRecord,setSearchedRecords} = myslice.actions;
console.log(red)

export {red,setSearchedRecords,setSelectedRecord}