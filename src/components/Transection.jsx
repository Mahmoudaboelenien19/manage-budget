import React, { useContext } from "react";
import TransitionList from "./TransectionList";
import { GlobalContext } from "../context/globalContext";
import { AnimatePresence } from "framer-motion";
const Transition = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div id="transection">
      <h4>History</h4>

      <div className="list-cont">
        <AnimatePresence>
          {transactions.map((transaction) => {
            return <TransitionList key={transaction.id} {...transaction} />;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Transition;
