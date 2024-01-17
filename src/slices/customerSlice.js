import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlice=createSlice({
    name:'customer',//oru slice ah uruvaakkiram enda athukku oru name vaikkanum
    initialState, //or initialState
    reducers:{
        addCustomer(state,action){
            state.push(action.payload)//enthe new data anuppinalum action moolamathaan anuppuvam atha payload moolam access pannikkalaam
        },
        deleteCustomer(state,action){
            const deleteIndex=action.payload;
            return state.filter((val,index)=>index !==deleteIndex)//ithu return pannirathu thaan puthu state
        }
    }
})

export const {addCustomer,deleteCustomer}=customerSlice.actions;//action creater ah veliyiddaachu
export default customerSlice.reducer //reducer ah veliyiddiddam


//vithu--------------
// import { createSlice } from "@reduxjs/toolkit";

// const initialState=[];

// const customerSlice=createSlice({
//     name:'customer',
//     initialState,
//     reducers:{
//         addCustomer(state,action){
           
//             state.push(action.payload)
//         }
//     }

// })

// export const {addCustomer}=customerSlice.actions;
// export default customerSlice.reducer