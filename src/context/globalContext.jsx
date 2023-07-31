import { createContext, useEffect, useReducer } from "react"
import GlobalReducer from "../GlobalReducer/GlobalReducer"

const intialState=(localStorage.data?JSON.parse(localStorage.data):[])
export const GlobalContext=createContext(intialState)
export const GlobalProvider=({children})=>{


 const [state, dispatch] = useReducer(GlobalReducer,intialState )
useEffect(() => {
  localStorage.setItem("data",JSON.stringify(state))
  
  }
, [state])
const AddTrancition=(transaction)=>{
    dispatch({
        type:"add",
        payload:transaction
    })
        }  
         const deleteTrancition=(id)=>{
            dispatch({
                type:"delete",
                payload:id
            })
                }
   
return(   
     <GlobalContext.Provider
      value={
        {
     transactions: state,
     AddTrancition,deleteTrancition
    }
     }>
        {children}
    </GlobalContext.Provider>
    )


}

