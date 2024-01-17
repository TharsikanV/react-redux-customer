import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './slices/customerSlice';
export const store=configureStore({
    devTools:false,//default ah true ah thaan irukkum false kuduththa states ulla enna nadakkithu endu kaaddaathu
    reducer:{//ithuthaan intha store kkaana state
        customers: customerReducer
    }
})


//vithu ------------------

// import { configureStore } from "@reduxjs/toolkit";
// import customerReducer from './slices/customerSlice';

// export const store=configureStore({
//     devTools:true,
//      reducer:{
//         customers:customerReducer
//      }
// })