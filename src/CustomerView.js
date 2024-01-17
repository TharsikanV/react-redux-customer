import React from "react";
import { useSelector } from "react-redux";
import { deleteCustomer } from "./slices/customerSlice";
import { useDispatch } from "react-redux";
export default function CustomerView(){
    
    const customers=useSelector((state)=>state.customers)
    //useSelector state ah eduthu tharum
    const dispatch=useDispatch();

    function deleteHandler(index){
        dispatch(deleteCustomer(index))
    }

    return <div>
        <h3>Customer List</h3>
        
        <ul style={{listStyle:'none'}}>
            {
                customers.map((customer,index) => <li>{customer}<button onClick={()=>deleteHandler(index)}>Delete</button></li>)
                // Array.isArray(customers) ? (
                //     customers.map((customer) => (
                //       <li>{customer}</li>
                //     ))
                //   ) : (
                //     <li>No customers available</li>
                //   )
               
            }
           
        </ul>
    </div>
}