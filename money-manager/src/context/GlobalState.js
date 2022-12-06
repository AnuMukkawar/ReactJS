import React,{ createContext, useReducer } from "react";
import AppReducer from './AppReducer';
import { API } from "../global";
import axios from 'axios';



//initial state
const initialState={
    transactions: [],
    err:null,
    loading:true
}

//create context
export const GlobalContext= createContext(initialState);
//provider component
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    async function getTransactions() {
        try{
            const res=await axios.get(`${API}`)
            console.log(res.data);
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload:res.data
            });
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }
   //actions
   async function deleteTransaction(_id){
    try{
        await fetch('https://money-manager-nqfx.onrender.com/',{
                 method: "DELETE",
                 data: {
                    _id:_id}
        }) 
        .then(res => console.log(res))
        .catch(err => console.log(err));

        // pass id as params
        // for(let i=0;i<res.data.length;i++){
            // if(res.data[i]._id===_id){
                dispatch({
                    type: 'DELETE_TRANSACTION',
                    payload:_id
                });      
            // }
         //}
        
    }catch(err){
        dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
        });
    }
}

async function addTransaction(transaction) {
    console.log(transaction)
    try{
       await fetch('https://money-manager-nqfx.onrender.com/',{
            method: "POST",
            body: JSON.stringify(transaction),
            headers: {
            "Content-Type": "application/json",
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    
    // const config={
    //     headers:{
    //         'Content-Type': 'application/json'
    //     }
    // }
    
    //     const res=await axios.post(`${API}`,config,transaction)
        // console.log(res.data);
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload:transaction
        });
    }catch(err){
        dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
        });
    }
}
/*function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}*/
    // function deleteTransaction(id){
    //     dispatch({
    //         type: 'DELETE_TRANSACTION',
    //         payload: id
    //     });
    // }

    // function addTransaction(transaction){
    //     dispatch({
    //         type: 'ADD_TRANSACTION',
    //         payload: transaction
    //     });
    // }

    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            error:state.error,
            loading:state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
