import { createSlice } from "@reduxjs/toolkit";

const organiseSlice=createSlice({
    name:'organise',
    initialState:{
        tickets:[],
        users:[],
        grouping:'Status',
        ordering:'Status',
    },
    reducers:{
        addTickets:(state,action)=>{
            state.tickets=action.payload;
        },
        addUsers:(state,action)=>{
            state.users=action.payload;
        },
        groupingState:(state,action)=>{
            state.grouping=action.payload;
        },
        orderingState:(state,action)=>{
            state.ordering=action.payload;
        }
    }
})
export const {addTickets,addUsers,groupingState,orderingState}=organiseSlice.actions;
export default organiseSlice.reducer;