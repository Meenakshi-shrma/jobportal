import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob : null,
        searchJobByText:"",
        allAppliedJobs:[],
        searchedQuery:"",
       },
    reducers:{
        // actions
        setAllJobs: (state,action) =>{
state.allJobs = action.payload;
        },
        setSingleJob:(state,action) =>{
state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action) =>{
            state.allAdminJobs = action.payload;
        },
        searchJobByText:(state,action) =>{
state.searchJobByText = action.payload;
        },
        setAllAppliedJobs:(state,action)=>{
            state.allAppliedJobs = action.payload;
        },
        setsearchedQuery:(state,action)=>{
            state.searchedQuery=action.payload;
        }
    }
});
export const {setAllJobs , setSingleJob,setAllAdminJobs,searchJobByText,setAllAppliedJobs,setsearchedQuery} = jobSlice.actions;
export default jobSlice.reducer;