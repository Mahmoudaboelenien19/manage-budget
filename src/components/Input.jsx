import React, { useContext, useState,useRef } from "react";
import { GlobalContext } from "../context/globalContext";
import { toast } from 'react-toastify';



const Input = () => {
    const {AddTrancition}=useContext(GlobalContext)
    const [text,setText]=useState("")
    const [amount,setAmount]=useState("")
    const amountInp=useRef()
    const textInp=useRef()

  return (
    <div id="input-cont">
      <h4>Add New Transaction</h4>
      <form action=""
      onSubmit={(e)=>{
        e.preventDefault()
        if( textInp.current.value=="" ||   amountInp.current.value=="") {
          toast.error('you must fill both text and amount inputs');
          return;}
          if( textInp.current.value!=="" &&   amountInp.current.value!=="" ) {
            toast.success('successfully added !');
          
           }
        textInp.current.value=""
        amountInp.current.value=""
     
        const transaction={
            id:Math.floor(Math.random()*1000000),
            text,
            amount
        }
        AddTrancition(transaction)
      }}>
        <label htmlFor="inp-one">Text</label>
        <input type="text" id="inp-one" placeholder="Enter Text ..." 
        ref={textInp}
        onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <label htmlFor="inp-two">Amount</label>

        <input type="number"  id="inp-two" placeholder="Enter Amount ..."
          ref={amountInp}
        onChange={(e)=>{
            setAmount(e.target.value)
        }}/>
        <button>Add Transaction</button>
      </form>
     
    </div>
  );
};

export default Input;
