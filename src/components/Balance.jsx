import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

const Balance = () => {
const {transactions}=useContext(GlobalContext)
const total=transactions.reduce((acc,cur)=>acc+=(+cur.amount),0)
// const total=transactions.reduce((acc,cur)=>+cur.amount>0?acc+=(+cur.amount):acc,0)
  return (
    <div id='balance'>
  <span> Your Balance is</span>
  <span style={{color:total>0?"green":"red"}}>$ {total}</span>
    </div>
  )
}

export default Balance