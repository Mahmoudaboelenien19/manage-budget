import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { sign } from "./TransectionList";
const Expense = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions.reduce(
    (acc, cur) => (+cur.amount > 0 ? (acc += +cur.amount) : acc),
    0
  );
  const expense = transactions.reduce(
    (acc, cur) => (+cur.amount < 0 ? (acc += +cur.amount) : acc),
    0
  );
  return (
    <div id="expense">
      <div>
        <span>Income</span>
        <span>$ {income}</span>
      </div>
      <div>
        <span>Expense</span>
        <span>
          {sign()} $ {Math.abs(expense)}
        </span>
      </div>
    </div>
  );
};

export default Expense;
