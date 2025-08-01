import { createSlice }  from "@reduxjs/toolkit";

const companySlice = createSlice ({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchCompanyByText:"",
    },
    reducers:{
        // actions
        setSingleCompany:(state,action)=>{
            state.singleCompany = action.payload;
        },
        setCompanies:(state,action) => {
            state.companies = action.payload;
        },
        searchCompanyByText:(state,action)=>{
            state.searchCompanyByText = action.payload;
        }
    }
});
export const {setSingleCompany , setCompanies,searchCompanyByText} = companySlice.actions;
export default companySlice.reducer;