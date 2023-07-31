import React,{useContext} from 'react'
import TransitionList from './TransitionList'
import { GlobalContext } from "../context/globalContext";
const Transition = () => {
  const {transactions}=useContext(GlobalContext)
  return (
    <div id='transection'>
<h4>History</h4>


<div className='list-cont'>
  {transactions.map(transaction=>{

return(    <TransitionList key={transaction.id} {... transaction} />
)
  })}
       </div>
    </div>
  )
}

export default Transition