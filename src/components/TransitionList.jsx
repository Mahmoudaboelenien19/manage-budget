import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { toast } from 'react-toastify';

export let  sign=(amount) => amount>0?"":`-`;

const TransitionList = ({text,amount,id}) => {

const {deleteTrancition}=useContext(GlobalContext);

    return (
 
    <div id="list" 
    className={amount<0?"minus":"positive"}>
      <span>{text}</span>
      <span>{sign(amount)}${Math.abs(amount)}</span>
      <small onClick={()=>  {
    deleteTrancition(id)
    toast.error('deleted');
  }
      }>X</small>
    </div>
   
  
  );
};

export default TransitionList;
