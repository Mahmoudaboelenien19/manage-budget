import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
export let sign = (amount) => (amount > 0 ? "" : `-`);

const TransitionList = ({ text, amount, id }) => {
  const { deleteTrancition } = useContext(GlobalContext);

  return (
    <motion.div
      id="list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={amount < 0 ? "minus" : "positive"}
    >
      <span>{text}</span>
      <span>
        {sign(amount)}${Math.abs(amount)}
      </span>
      <small
        onClick={() => {
          deleteTrancition(id);
          toast.error("deleted");
        }}
      >
        X
      </small>
    </motion.div>
  );
};

export default TransitionList;
